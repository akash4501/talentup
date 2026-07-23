import { auth, db } from "./firebase";

import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

export async function createJob(job: any) {
  const user = auth.currentUser;

  if (!user) throw new Error("Recruiter not logged in");

  await addDoc(collection(db, "jobs"), {
    ...job,
    recruiterId: user.uid,
    createdAt: serverTimestamp(),
  });
}

export async function getJobs() {
  const q = query(
    collection(db, "jobs"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}