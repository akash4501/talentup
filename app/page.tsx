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
        <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col items-center text-center">

          <h1 className="text-6xl font-bold leading-tight">
            
            <span className="text-blue-600">Find Your Dream Job & Internship</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            TalentUp helps students discover internships, jobs,
            AI mock interviews and study material — all in one place.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Find Jobs
            </button>

            <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Explore Companies
            </button>
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