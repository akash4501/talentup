import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}

        <Link href="/" className="flex items-center">

  <Image
    src="/logo.png"
    alt="TalentUp"
    width={240}
    height={70}
    priority
    className="h-14 w-auto"
  />

</Link>

        {/* Menu */}

        <ul className="hidden lg:flex items-center gap-8 font-medium">

          <li>
            <Link
              href="/jobs"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Jobs
            </Link>
          </li>

          <li>
            <Link
              href="/internships"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Internships
            </Link>
          </li>

          <li>
            <Link
              href="/companies"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Companies
            </Link>
          </li>

          <li>
            <Link
              href="/mock-interview"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              AI Mock Interview
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </Link>
          </li>

        </ul>

        {/* Buttons */}

        <div className="flex items-center gap-3">

          <Link href="/login">
<button className="px-6 py-2.5 rounded-xl border border-blue-600 text-blue-600 font-semibold bg-white hover:bg-blue-600 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
  Login
</button>
</Link>

          <Link href="/signup">
  <button
    className="
      px-7 py-3
      rounded-xl
      bg-linear-to-r
      from-blue-600
      to-indigo-700
      text-white
      font-semibold
      shadow-lg
      hover:from-blue-700
      hover:to-indigo-800
      hover:shadow-2xl
      hover:-translate-y-0.5
      transition-all
      duration-300
      cursor-pointer
    "
  >
    Get Started →
  </button>
</Link>

        </div>

      </div>
    </nav>
  );
}