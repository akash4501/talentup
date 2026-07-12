export default function StudentLogin() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-gray-900">
          Welcome Back 👋
        </h1>
        <button className="w-full mt-8 border border-gray-300 rounded-xl py-3 font-semibold hover:bg-gray-100 transition">
          Continue with Google
        </button>
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="px-4 text-gray-500">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-xl px-4 py-3 mt-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
          Login
        </button>
        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer">
            Sign Up
          </span>
        </p>
        <p className="text-center font-bold text-black-500 mt-2">
          Login to continue your journey.
        </p>

      </div>

    </main>
  );
}