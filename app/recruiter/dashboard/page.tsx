"use client";

import AuthGuard from "../../../components/auth/AuthGuard";
import LogoutButton from "@/components/LogoutButton";

export default function RecruiterDashboard() {
  return (
    <AuthGuard role="recruiter">

      <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-100">

        {/* Navbar */}

        <nav className="bg-white shadow-sm border-b">

          <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

            <h1 className="text-2xl font-bold text-blue-600">
              TalentUp
            </h1>

            <div className="flex items-center gap-4">

              <span className="font-medium text-gray-700">
                💼 Recruiter
              </span>

              <LogoutButton/>

            </div>

          </div>

        </nav>

        {/* Hero */}

        <section className="max-w-7xl mx-auto px-8 py-16">

          <h2 className="text-5xl font-bold text-gray-900">
            Welcome to Recruiter Dashboard 🚀
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Manage job postings, applicants, interviews and hiring activities.
          </p>

          {/* Stats */}

          <div className="grid md:grid-cols-4 gap-6 mt-14">

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold">Active Jobs</h3>
              <p className="text-4xl font-bold mt-4 text-blue-600">0</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold">Applicants</h3>
              <p className="text-4xl font-bold mt-4 text-green-600">0</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold">Interviews</h3>
              <p className="text-4xl font-bold mt-4 text-purple-600">0</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold">Hired</h3>
              <p className="text-4xl font-bold mt-4 text-red-600">0</p>
            </div>

          </div>

        </section>

      </main>

    </AuthGuard>
  );
}