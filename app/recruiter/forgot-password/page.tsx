"use client";

import { useState } from "react";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function recruiterForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      await sendPasswordResetEmail(auth, email);

      alert("Password reset email sent successfully.");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-200 p-8">

        <div className="text-center">
          <div className="text-6xl">🔒</div>

          <h1 className="text-3xl font-bold mt-4">
            Forgot Password
          </h1>

          <p className="text-gray-500 mt-2">
            Enter your registered email.
          </p>
        </div>

        <div className="mt-8">
          <label className="font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <button
          onClick={handleReset}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        <Link
          href="/recruiter/login"
          className="block text-center mt-5 text-blue-600 hover:underline"
        >
          ← Back to Login
        </Link>

      </div>

    </main>
  );
}