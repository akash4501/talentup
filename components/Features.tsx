import {
  BriefcaseBusiness,
  GraduationCap,
  BrainCircuit,
  LibraryBig,
  Building2,
  FileSearch,
} from "lucide-react";
const features = [
  {
    title: "Jobs",
    description: "Apply to branded companies with one click.",
    icon: BriefcaseBusiness,
    color: "bg-blue-100",
  },
  {
    title: "Internships",
    description: "Find internships from startups and MNCs.",
    icon: GraduationCap,
    color: "bg-green-100",
  },
  {
    title: "AI Mock Interview",
    description: "Practice interviews with AI.",
    icon: BrainCircuit,
    color: "bg-purple-100",
  },
  {
    title: "Study Material",
    description: "Learn DSA, Aptitude and Interview Questions.",
    icon: LibraryBig,
    color: "bg-yellow-100",
  },
  {
    title: "Top Companies",
    description: "Explore companies hiring freshers.",
    icon: Building2,
    color: "bg-red-100",
  },
  {
    title: "ATS Resume Checker",
    description: "Improve your resume score instantly.",
    icon: FileSearch,
    color: "bg-pink-100",
  },
];

export default function Features() {
  return (
    <section className="bg-blue-50 py-24">
  <div className="max-w-7xl mx-auto px-8">

      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-900">
          Everything You Need 🚀
        </h2>

        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Everything required to crack internships, jobs and interviews —
          all in one platform.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-16">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500 transition-all duration-300 cursor-pointer"
          >
            <div
              className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center text-3xl`}
            >
                <feature.icon className="w-8 h-8 text-blue-600" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mt-6">
              {feature.title}
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              {feature.description}
            </p>

            <button className="mt-8 text-blue-600 font-semibold hover:translate-x-1 transition">
              Learn More →
            </button>

          </div>
        ))}
      </div>
      </div>
    </section>
  );
}