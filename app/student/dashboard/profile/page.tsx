import AuthGuard from "@/components/auth/AuthGuard";
import Sidebar from "@/components/student/Sidebar";
import Navbar from "@/components/student/Navbar";

import ProfileHeader from "@/components/student/profile/ProfileHeader";
import PersonalInfo from "@/components/student/profile/PersonalInfo";
import Education from "@/components/student/profile/Education";
import Skills from "@/components/student/profile/Skills";
import Projects from "@/components/student/profile/Projects";
import SocialLinks from "@/components/student/profile/SocialLinks";

export default function StudentProfilePage() {
  return (
    <AuthGuard role="student">
      <div className="flex min-h-screen bg-gray-100">

        <Sidebar />

        <div className="flex-1 flex flex-col">

          <Navbar />

          <main className="p-8 space-y-8">

            <ProfileHeader />

            <PersonalInfo />

            <Education />

            <Skills />

            <Projects />

            <SocialLinks />

          </main>

        </div>

      </div>
    </AuthGuard>
  );
}