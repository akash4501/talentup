const companies = [
  {
    name: "Google",
    logo: "🟢",
    openings: "24 Openings",
  },
  {
    name: "Microsoft",
    logo: "🔷",
    openings: "18 Openings",
  },
  {
    name: "Amazon",
    logo: "🟠",
    openings: "31 Openings",
  },
  {
    name: "Infosys",
    logo: "🔵",
    openings: "15 Openings",
  },
  {
    name: "TCS",
    logo: "🟣",
    openings: "28 Openings",
  },
  {
    name: "Wipro",
    logo: "🟢",
    openings: "12 Openings",
  },
];

export default function TopCompanies() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-4xl font-bold text-center text-white">
        Top Hiring Companies
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {companies.map((company) => (
          <div
            key={company.name}
            className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500 transition"
          >
            <div className="text-5xl">
              {company.logo}
            </div>

            <h3 className="text-2xl font-bold text-white mt-4">
              {company.name}
            </h3>

            <p className="text-gray-400 mt-2">
              {company.openings}
            </p>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
              View Jobs
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}