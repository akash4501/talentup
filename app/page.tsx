import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import FeaturedJobs from "@/components/FeaturedJobs";
import TopCompanies from "@/components/TopCompanies";
import SearchSection from "@/components/SearchSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-cyan-100">

  {/* Background Blur */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

  <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-8 py-28 text-center relative">

    <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
      🚀 India's Career Growth Platform
    </span>

    <h1 className="mt-8 text-6xl md:text-7xl font-extrabold leading-tight text-gray-900">
      Launch Your Career with
      <br />
      <span className="text-blue-600">
        TalentUp
      </span>
    </h1>

    <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-600 leading-9">
      Discover internships, fresher jobs, AI Mock Interviews,
      ATS Resume Checker and study resources —
      all in one modern platform.
    </p>

    <div className="mt-12 flex justify-center gap-5 flex-wrap">

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition-all">
        🔍 Explore Jobs
      </button>

      <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all">
        🏢 Top Companies
      </button>

    </div>

    {/* Stats */}

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">

      <div>
        <h2 className="text-4xl font-bold text-blue-600">
          10K+
        </h2>
        <p className="text-gray-600 mt-2">
          Jobs
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-blue-600">
          500+
        </h2>
        <p className="text-gray-600 mt-2">
          Companies
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-blue-600">
          15K+
        </h2>
        <p className="text-gray-600 mt-2">
          Students
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-blue-600">
          95%
        </h2>
        <p className="text-gray-600 mt-2">
          Success Rate
        </p>
      </div>

    </div>

  </div>

</section>
        <SearchSection/>
         <Features />
        <FeaturedJobs />

  <TopCompanies />

      </main>
    </>
  );
}