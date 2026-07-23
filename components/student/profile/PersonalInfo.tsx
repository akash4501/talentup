"use client";

import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "@/lib/profile";

export default function PersonalInfo() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const data = await getProfile();

    if (!data) return;

    setForm({
      name: data.name || "",
      email: data.email || "",
      phone: data.phone || "",
      city: data.city || "",
    });
  }

  async function saveProfile() {

    await updateProfile(form);

    alert("Profile Updated Successfully ✅");

  }

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <h2 className="text-2xl font-bold mb-6">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          value={form.name}
          onChange={(e)=>setForm({...form,name:e.target.value})}
          className="border rounded-xl p-3"
          placeholder="Full Name"
        />

        <input
          value={form.email}
          onChange={(e)=>setForm({...form,email:e.target.value})}
          className="border rounded-xl p-3"
          placeholder="Email"
        />

        <input
          value={form.phone}
          onChange={(e)=>setForm({...form,phone:e.target.value})}
          className="border rounded-xl p-3"
          placeholder="Phone Number"
        />

        <input
          value={form.city}
          onChange={(e)=>setForm({...form,city:e.target.value})}
          className="border rounded-xl p-3"
          placeholder="City"
        />

      </div>

      <button
        onClick={saveProfile}
        className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl"
      >
        Save Changes
      </button>

    </div>
  );
}