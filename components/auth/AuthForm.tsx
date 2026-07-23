"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

type AuthFormProps = {
  role: "student" | "recruiter";
};

export default function AuthForm({ role }: AuthFormProps) {
  const router = useRouter();

  const isStudent = role === "student";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
  console.log("Login button clicked");

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    setLoading(true);

    console.log("Trying Firebase Login...");

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("Firebase Login Success");
    console.log(userCredential.user);

    alert("Login Success");

    if (isStudent) {
      console.log("Redirecting to Student Dashboard...");
      router.replace("/student/dashboard");
    } else {
      console.log("Redirecting to Recruiter Dashboard...");
      router.replace("/recruiter/dashboard");
    }

  } catch (error: any) {
    console.error("Login Error:", error);
    alert(error.message);
  } finally {
    setLoading(false);
  }
};
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-200 p-8">

        {/* Header */}

        <div className="text-center">

          <div className="text-6xl">
            {isStudent ? "🎓" : "💼"}
          </div>

          <h1 className="text-3xl font-bold mt-4">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to continue as {isStudent ? "Student" : "Recruiter"}
          </p>

        </div>

        {/* Google Login */}

        <Link href={`/${role}/google-login`}>

          <button className="mt-8 w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 hover:bg-gray-50 hover:shadow-md transition cursor-pointer">

            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />

            <span className="font-medium">
              Continue with Google
            </span>

          </button>

        </Link>

        {/* Divider */}

        <div className="flex items-center my-8">

          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="mx-4 text-gray-500 text-sm font-medium">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-300"></div>

        </div>

        {/* Email */}

        <div>

          <label className="font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

        </div>

        {/* Password */}

        <div className="mt-5">

          <label className="font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

        </div>

        {/* Forgot Password */}

        <div className="mt-3 flex justify-end">

          <Link
            href={`/${role}/forgot-password`}
            className="text-blue-600 text-sm hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login */}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition cursor-pointer disabled:bg-blue-300"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Signup */}

        <p className="text-center text-gray-600 mt-6">

          Don't have an account?

          <Link
            href={`/${role}/signup`}
            className="ml-2 text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </main>
  );
}