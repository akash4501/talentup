import Link from "next/link";

export default function QuickActions() {
  return (

    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <Link
          href="/student/dashboard/jobs"
          className="bg-blue-600 text-white rounded-xl p-4 text-center hover:bg-blue-700 transition"
        >
          Browse Jobs
        </Link>

        <Link
          href="/student/dashboard/resume-builder"
          className="bg-green-600 text-white rounded-xl p-4 text-center hover:bg-green-700 transition"
        >
          Resume Builder
        </Link>

        <Link
          href="/student/dashboard/profile"
          className="bg-purple-600 text-white rounded-xl p-4 text-center hover:bg-purple-700 transition"
        >
          Edit Profile
        </Link>

        <Link
          href="/student/dashboard/ai-interview"
          className="bg-red-600 text-white rounded-xl p-4 text-center hover:bg-red-700 transition"
        >
          AI Interview
        </Link>

      </div>

    </div>

  );
}