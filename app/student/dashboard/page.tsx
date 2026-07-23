import AuthGuard from "../../../components/auth/AuthGuard";
import Sidebar from "@/components/student/Sidebar";
import Navbar from "@/components/student/Navbar";
import DashboardCards from "@/components/student/DashboardCards";
import QuickActions from "@/components/student/QuickActions";
import RecentJobs from "@/components/student/RecentJobs";

export default function StudentDashboard() {
  return (
    <AuthGuard role="student">

      <div className="flex min-h-screen bg-gray-100">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">

          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="p-8 space-y-8">

            {/* Welcome */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Welcome Back 👋
              </h2>

              <p className="text-gray-500 mt-2">
                Here's what's happening with your career today.
              </p>
            </div>

            {/* Stats Cards */}
            <DashboardCards />

            {/* Bottom Section */}
            <div className="grid lg:grid-cols-2 gap-8">

              <QuickActions />

              <RecentJobs />

            </div>

          </main>

        </div>

      </div>

    </AuthGuard>
  );
}