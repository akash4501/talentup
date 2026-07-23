"use client";

import { useState } from "react";
import { createJob } from "@/lib/jobs";

export default function JobForm() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "Full Time",
    description: "",
    skills: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (
      !job.title ||
      !job.company ||
      !job.location ||
      !job.salary
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      await createJob(job);

      alert("Job Posted Successfully 🎉");

      setJob({
        title: "",
        company: "",
        location: "",
        salary: "",
        type: "Full Time",
        description: "",
        skills: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-8">
        Post New Job
      </h2>

      <div className="grid gap-5">

        <input
          placeholder="Job Title"
          value={job.title}
          onChange={(e) =>
            setJob({ ...job, title: e.target.value })
          }
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Company"
          value={job.company}
          onChange={(e) =>
            setJob({ ...job, company: e.target.value })
          }
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Location"
          value={job.location}
          onChange={(e) =>
            setJob({ ...job, location: e.target.value })
          }
          className="border rounded-xl p-3"
        />

        <input
          placeholder="Salary"
          value={job.salary}
          onChange={(e) =>
            setJob({ ...job, salary: e.target.value })
          }
          className="border rounded-xl p-3"
        />

        <select
          value={job.type}
          onChange={(e) =>
            setJob({ ...job, type: e.target.value })
          }
          className="border rounded-xl p-3"
        >
          <option>Full Time</option>
          <option>Internship</option>
          <option>Part Time</option>
          <option>Remote</option>
        </select>

        <textarea
          rows={5}
          placeholder="Job Description"
          value={job.description}
          onChange={(e) =>
            setJob({ ...job, description: e.target.value })
          }
          className="border rounded-xl p-3"
        />

        <textarea
          rows={3}
          placeholder="Required Skills"
          value={job.skills}
          onChange={(e) =>
            setJob({ ...job, skills: e.target.value })
          }
          className="border rounded-xl p-3"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 text-white rounded-xl py-3 font-semibold hover:bg-blue-700"
        >
          {loading ? "Posting..." : "Publish Job"}
        </button>

      </div>
    </div>
  );
}