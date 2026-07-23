import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

export async function registerStudent(
  name: string,
  email: string,
  password: string
) {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  await setDoc(
    doc(db, "users", userCredential.user.uid),
    {
      uid: userCredential.user.uid,
      name,
      email,
      role: "student",
      createdAt: new Date(),
    }
  );

  return userCredential.user;
}