import { jobs } from "@/data/jobs";

export default function FeaturedJobs() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-4xl font-bold text-center">
        🔥 Featured Jobs
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {jobs.map((job) => (
          <div key={job.title}>
            {/* Card */}
          </div>
        ))}
      </div>
    </section>
  );
}