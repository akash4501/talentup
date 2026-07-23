"use client";

import Link from "next/link";
import Image from "next/image";
import { signInWithPopup } from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  auth,
  db,
  googleProvider,
} from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function StudentGoogleLogin() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;

    const userRef = doc(db, "users", user.uid);

    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        role: "student",
        createdAt: serverTimestamp(),
      });
    }

    router.push("/student/dashboard");
  } catch (error: any) {
    console.log(error);

    alert(error.message);
  }
};
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-6">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 p-10">

        <div className="text-center">

          <div className="text-6xl mb-4">
            🎓
          </div>

          <h1 className="text-4xl font-bold text-gray-900">
            Student Portal
          </h1>

          <p className="text-gray-500 mt-3">
            Sign in securely with your Google account.
          </p>

        </div>

        <button
          onClick={handleGoogleLogin}
          className="mt-10 w-full flex items-center justify-center gap-4 rounded-xl border border-gray-300 bg-white py-4 hover:border-blue-500 hover:shadow-lg transition cursor-pointer"
        >
          <Image
            src="/google-logo.webp"
            alt="Google"
            width={26}
            height={26}
          />

          <span className="font-semibold text-lg">
            Continue with Google
          </span>

        </button>

        <p className="text-center text-gray-500 text-sm mt-8">
          🔒 Secure authentication powered by Firebase
        </p>

        <Link href="/student/login">

          <button className="mt-6 w-full text-blue-600 hover:underline cursor-pointer">
            ← Back to Email Login
          </button>

        </Link>

      </div>

    </main>
  );
}