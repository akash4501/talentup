const features = [
  {
    title: "Jobs",
    description: "Apply to branded companies with one click.",
    icon: "💼",
  },
  {
    title: "Internships",
    description: "Find internships from startups and MNCs.",
    icon: "🏢",
  },
  {
    title: "AI Mock Interview",
    description: "Practice interviews with AI.",
    icon: "🤖",
  },
  {
    title: "Study Material",
    description: "Learn DSA, Aptitude and Interview Questions.",
    icon: "📚",
  },
  {
    title: "Top Companies",
    description: "Explore companies hiring freshers.",
    icon: "🏆",
  },
  {
    title: "ATS Resume Checker",
    description: "Improve your resume score instantly.",
    icon: "📄",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-4xl font-bold text-center">
        Everything You Need
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-4xl">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-semibold mt-4">
              {feature.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {feature.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}