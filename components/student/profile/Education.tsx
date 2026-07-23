export default function Education() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <h2 className="text-2xl font-bold mb-6">
        Education
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          className="border rounded-xl p-3"
          placeholder="College"
        />

        <input
          className="border rounded-xl p-3"
          placeholder="Branch"
        />

        <input
          className="border rounded-xl p-3"
          placeholder="CGPA"
        />

        <input
          className="border rounded-xl p-3"
          placeholder="Graduation Year"
        />

      </div>

    </div>
  );
}