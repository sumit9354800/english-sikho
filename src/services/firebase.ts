import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  signOut,
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
// Scopes for Google Docs & Google Drive file access
provider.addScope('https://www.googleapis.com/auth/documents');
provider.addScope('https://www.googleapis.com/auth/drive.file');

// Flag to track sign-in in progress
let isSigningIn = false;
// In-memory token caching (never in localStorage per security requirements)
let cachedAccessToken: string | null = null;

export const initFirebaseAuth = (
  onUserChanged: (user: User | null) => void,
  onTokenChanged: (token: string | null) => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    onUserChanged(user);
    if (!user) {
      cachedAccessToken = null;
      onTokenChanged(null);
    } else if (cachedAccessToken) {
      onTokenChanged(cachedAccessToken);
    }
  });
};

export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        // Token not in memory (page reload). User will click sign in or re-auth if needed
        cachedAccessToken = null;
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const signInWithGooglePopup = async (): Promise<{ user: User; accessToken: string }> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Could not retrieve access token from Google authentication.');
    }

    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error) {
    console.error('Sign-in error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const googleSignIn = signInWithGooglePopup;

export const getAccessToken = (): string | null => {
  return cachedAccessToken;
};

export const setAccessToken = (token: string | null) => {
  cachedAccessToken = token;
};

export const signOutUser = async () => {
  await signOut(auth);
  cachedAccessToken = null;
};

export const googleLogout = signOutUser;

