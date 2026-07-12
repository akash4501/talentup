import { jobs } from "@/data/jobs";

export default function FeaturedJobs() {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 py-28">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900">
            🔥 Featured Jobs
          </h2>

          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover the latest internship and job opportunities from top
            companies across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {jobs.map((job) => (
            <div
              key={job.title}
              className="bg-white rounded-3xl border border-gray-200 shadow-md p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500 transition-all duration-300"
            >
              {/* Company */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                  💼
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {job.title}
                  </h3>

                  <p className="text-gray-500">
                    {job.company}
                  </p>
                </div>

              </div>

              {/* Details */}

              <div className="mt-8 space-y-4">

                <p className="flex items-center gap-2 text-gray-600">
                  📍 {job.location}
                </p>

                <p className="flex items-center gap-2 text-green-600 font-semibold">
                  💰 {job.salary}
                </p>

              </div>

              {/* Tags */}

              <div className="flex gap-3 mt-8 flex-wrap">

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Full Time
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Fresher
                </span>

              </div>

              {/* Button */}

              <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                Apply Now →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}