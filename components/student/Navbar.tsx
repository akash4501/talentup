"use client";

import LogoutButton from "@/components/LogoutButton";

export default function Navbar() {
  return (
    <header className="bg-white border-b shadow-sm">

      <div className="flex items-center justify-between px-8 py-5">

        {/* Left */}

        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Student Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Welcome back 👋
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          {/* Search */}

          <input
            type="text"
            placeholder="Search..."
            className="w-72 border rounded-xl px-4 py-2 outline-none focus:border-blue-500"
          />

          {/* Notification */}

          <button className="text-2xl hover:scale-110 transition">
            🔔
          </button>

          {/* Avatar */}

          <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
            A
          </div>

          <LogoutButton />

        </div>

      </div>

    </header>
  );
}