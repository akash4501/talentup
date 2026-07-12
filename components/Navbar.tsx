import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b bg-white">
      <h1 className="text-6xl font-bold leading-tight text-gray-900">
        TalentUp
      </h1>

      <ul className="hidden md:flex items-center gap-8">
        <li className="cursor-pointer hover:text-blue-600 text-gray-700">Jobs</li>
        <li className="cursor-pointer hover:text-blue-600 text-gray-700">Internships</li>
        <li className="cursor-pointer hover:text-blue-600 text-gray-700">Companies</li>
        <li className="cursor-pointer hover:text-blue-600 text-gray-700">AI Mock Interview</li>
        <li className="cursor-pointer hover:text-blue-600 text-gray-700">About</li>
      </ul>

      <div className="flex gap-3">
        <Link href="/login">
          <button className="border px-5 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
}