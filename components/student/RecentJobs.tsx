export default function RecentJobs() {

  const jobs = [
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Intern",
    "Java Developer",
    "Python Developer",
  ];

  return (

    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold">
        Recent Jobs
      </h2>

      <div className="mt-6 space-y-4">

        {jobs.map((job) => (

          <div
            key={job}
            className="border rounded-xl p-4 hover:bg-blue-50 transition"
          >
            {job}
          </div>

        ))}

      </div>

    </div>

  );
}