export default function SocialLinks() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <h2 className="text-2xl font-bold mb-6">
        Social Links
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <input
          className="border rounded-xl p-3"
          placeholder="GitHub URL"
        />

        <input
          className="border rounded-xl p-3"
          placeholder="LinkedIn URL"
        />

        <input
          className="border rounded-xl p-3"
          placeholder="Portfolio URL"
        />

      </div>

      <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
        Save Profile
      </button>

    </div>
  );
}