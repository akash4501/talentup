import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function getProfile() {
  const user = auth.currentUser;

  if (!user) return null;

  const docRef = doc(db, "users", user.uid);

  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) return null;

  return snapshot.data();
}

export async function updateProfile(data: any) {
  const user = auth.currentUser;

  if (!user) return;

  await updateDoc(doc(db, "users", user.uid), data);
}