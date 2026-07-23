import AuthGuard from "@/components/auth/AuthGuard";
import JobForm from "@/components/recruiter/JobForm";

export default function PostJobPage() {
  return (
    <AuthGuard role="recruiter">
      <main className="min-h-screen bg-gray-100 p-10">
        <JobForm />
      </main>
    </AuthGuard>
  );
}