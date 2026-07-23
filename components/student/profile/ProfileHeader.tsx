export default function ProfileHeader() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <div className="flex items-center gap-8">

        <img
          src="https://ui-avatars.com/api/?name=Student&size=180"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-500"
        />

        <div>

          <h1 className="text-4xl font-bold">
            Student Name
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Computer Science Student
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">
            Edit Profile
          </button>

        </div>

      </div>

    </div>
  );
}