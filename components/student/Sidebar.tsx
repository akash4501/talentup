"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Dashboard",
    href: "/student/dashboard",
    icon: "🏠",
  },
  {
    title: "Profile",
    href: "/student/dashboard/profile",
    icon: "👤",
  },
  {
    title: "Jobs",
    href: "/student/dashboard/jobs",
    icon: "💼",
  },
  {
    title: "Applied Jobs",
    href: "/student/dashboard/applied-jobs",
    icon: "📄",
  },
  {
    title: "Saved Jobs",
    href: "/student/dashboard/saved-jobs",
    icon: "❤️",
  },
  {
    title: "Resume Builder",
    href: "/student/dashboard/resume-builder",
    icon: "📑",
  },
  {
    title: "AI Interview",
    href: "/student/dashboard/ai-interview",
    icon: "🤖",
  },
  {
    title: "Study Material",
    href: "/student/dashboard/study-material",
    icon: "📚",
  },
  {
    title: "Notifications",
    href: "/student/dashboard/notifications",
    icon: "🔔",
  },
  {
    title: "Settings",
    href: "/student/dashboard/settings",
    icon: "⚙️",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r shadow-sm min-h-screen">

      <div className="p-8 border-b">

        <h1 className="text-3xl font-bold text-blue-600">
          TalentUp
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Student Portal
        </p>

      </div>

      <nav className="p-5 space-y-2">

        {menuItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-200 ${
                active
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <span className="text-xl">{item.icon}</span>

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}