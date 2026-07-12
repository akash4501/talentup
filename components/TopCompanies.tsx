import Image from "next/image";
const companies = [
  {
    name: "Google",
    logo: "/google-logo.webp",
    openings: "24 Active Jobs",
    rating: "4.8",
    type: "Product Based",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Microsoft",
    logo: "/microsoft-logo.png",
    openings: "18 Active Jobs",
    rating: "4.7",
    type: "Product Based",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Amazon",
    logo: "/amazon-logo.webp",
    openings: "31 Active Jobs",
    rating: "4.6",
    type: "Product Based",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Infosys",
    logo: "/infosys-logo.jpg",
    openings: "15 Active Jobs",
    rating: "4.4",
    type: "Service Based",
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "TCS",
    logo: "/tcs-logo.webp",
    openings: "28 Active Jobs",
    rating: "4.5",
    type: "Service Based",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    name: "Wipro",
    logo: "/wipro-logo.webp",
    openings: "12 Active Jobs",
    rating: "4.3",
    type: "Service Based",
    color: "bg-orange-100 text-brown-600",
  },
];
export default function TopCompanies() {
  return (
    <section className="bg-linear-to-r from-blue-50 to-white py-28">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-5xl font-bold text-gray-900">
            Top Hiring Companies 🚀
          </h2>

          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore India's top companies actively hiring freshers and
            experienced professionals.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {companies.map((company) => (
  <div
    key={company.name}
    className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-3 hover:border-blue-500 transition-all duration-300 overflow-hidden"
  >
    {/* Top Strip */}
    <div className="h-2 bg-linear-to-r from-blue-500 to-cyan-400"></div>

    <div className="p-8">

      {/* Logo */}
      <div className="w-24 h-24 mx-auto rounded-2xl bg-gray-50 flex items-center justify-center shadow-sm">
        <Image
          src={company.logo}
          alt={company.name}
          width={70}
          height={70}
          className="object-contain"
        />
      </div>

      {/* Company Name */}
      <h3 className="text-3xl font-bold mt-6 text-gray-900">
        {company.name}
      </h3>

      {/* Badge */}
      <div
        className={`inline-block mt-3 px-4 py-1 rounded-full text-sm font-semibold ${company.color}`}
      >
        {company.type}
      </div>

      {/* Jobs */}
      <p className="mt-5 text-gray-600">
        💼 {company.openings}
      </p>

      {/* Rating */}
      <div className="flex justify-center items-center gap-2 mt-5">

        <span className="text-yellow-400 text-xl">
          ⭐⭐⭐⭐⭐
        </span>

        <span className="font-semibold text-gray-700">
          {company.rating}
        </span>

      </div>

      {/* Button */}

      <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all group-hover:scale-105">
        Explore Jobs →
      </button>

    </div>
  </div>
))}

        </div>

      </div>
    </section>
  );
}