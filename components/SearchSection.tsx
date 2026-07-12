"use client";

import { useState } from "react";

export default function SearchSection() {
  const [search, setSearch] = useState("");

  return (
    <section className="max-w-7xl mx-auto px-8 -mt-10 relative z-10">
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Job title, skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          placeholder="Location"
          className="flex-1 border rounded-lg px-4 py-3"
        />

        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">
          Search
        </button>
      </div>
    </section>
  );
}