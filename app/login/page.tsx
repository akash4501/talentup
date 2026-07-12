const accounts = [
  {
    title: "Student",
    icon: "🎓",
    description:
      "Find Jobs, Internships, AI Mock Interviews and Study Material.",
    button: "Continue as Student",
  },
  {
    title: "Recruiter",
    icon: "🏢",
    description:
      "Post Jobs, Hire Students and Manage Applications.",
    button: "Continue as Recruiter",
  },
];
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-7xl w-full px-8">

        <h1 className="text-5xl font-bold text-center text-gray-900">
          Choose Your Account
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Continue as a Student or Recruiter
        </p>
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {accounts.map((account) => (
  <div
    key={account.title}
    className="bg-white rounded-2xl shadow-lg p-12 border hover:shadow-2xl hover:border-blue-600 transition-all duration-300 cursor-pointer"
  >
    <div className="text-7xl text-center">
  {account.icon}
</div>
<h2 className="text-4xl font-bold text-center mt-6">
  {account.title}
</h2>

  </div>
))}
          <div className="bg-white rounded-2xl shadow-lg p-8 border hover:shadow-2xl hover:border-blue-600 transition-all duration-300 cursor-pointer">

            <div className="text-6xl text-center">
              🎓
            </div>

            <h2 className="text-3xl font-bold text-center mt-6">
              Student
            </h2>

            <p className="text-gray-600 text-center mt-4">
              Find Jobs, Internships, AI Mock Interviews and Study Material.
            </p>

            <button className="w-full mt-8 bg-blue-600 text-white py-3 text-lg rounded-lg hover:bg-blue-700 transition">
              Continue
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}