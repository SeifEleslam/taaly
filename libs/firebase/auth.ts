import firebase_app from "./config";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

export const auth = getAuth(firebase_app);

export function onAuthChanged(callback: (user: any) => void) {
  return onAuthStateChanged(auth, callback);
}

export async function signin(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signOut() {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}
