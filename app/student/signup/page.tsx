"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

export default function StudentSignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] =useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters");
      return;
    }

  try {
  setLoading(true);

  console.log("Creating Auth User...");

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  console.log("AUTH DONE");
  console.log(userCredential.user.uid);

  try {
    await setDoc(doc(db, "users", userCredential.user.uid), {
      uid: userCredential.user.uid,
      name,
      email,
      role: "student",
      createdAt: serverTimestamp(),
    });

    console.log("FIRESTORE DONE");
  } catch (firestoreError) {
    console.error("Firestore Error:", firestoreError);
    alert("Firestore Error");
    return;
  }

  alert("Signup Success");

  router.replace("/student/dashboard");

} catch (error: any) {
  console.error(error);
  alert(error.message);
} finally {
  setLoading(false);
}
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-200 p-8">

        <div className="text-center">

          <div className="text-6xl">
            🎓
          </div>

          <h1 className="text-3xl font-bold mt-4">
            Student Sign Up
          </h1>

          <p className="text-gray-500 mt-2">
            Create your TalentUp Student Account
          </p>

        </div>

        {/* Name */}

        <div className="mt-8">

          <label className="font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Email */}

        <div className="mt-5">

          <label className="font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Password */}

        <div className="mt-5">

          <label className="font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Confirm Password */}

        <div className="mt-5">

          <label className="font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Signup Button */}

        <button
          onClick={handleSignup}
          disabled={loading}
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition disabled:bg-blue-300"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        {/* Login */}

        <p className="text-center mt-6 text-gray-600">

          Already have an account?

          <Link
            href="/student/login"
            className="ml-2 text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </main>
  );
}