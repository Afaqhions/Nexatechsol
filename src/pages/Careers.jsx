import React from "react";
const jobOpenings = [
  {
    title: "Frontend Developer",
    location: "Remote / Karachi Office",
    type: "Full-Time",
    description:
      "Seeking React.js developers with a passion for UI/UX and performance optimization.",
  },
  {
    title: "Backend Engineer",
    location: "Remote / Lahore Office",
    type: "Full-Time",
    description:
      "Looking for Node.js experts with experience in building scalable APIs and working with databases.",
  },
  {
    title: "UI Designer",
    location: "Remote",
    type: "Part-Time",
    description:
      "Creative designer with Figma/Adobe XD expertise to design user-centered experiences.",
  },
  {
    title: "UX Designer",
    location: "Remote",
    type: "Full-Time",
    description:
      "Creative designer with Figma/Adobe XD expertise to design user-centered experiences.",
  },
];

const Careers = () => {
  return (
    <div className="bg-slate-900 text-gray-300 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">
            Join Nexatechsol
          </h1>
          <p className="text-blue-400">
            Be part of a team building cutting-edge solutions in tech and
            innovation.
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700 hover:shadow-blue-900 transition"
            >
              <h2 className="text-2xl text-blue-400 font-semibold">
                {job.title}
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                📍 {job.location} | 🕒 {job.type}
              </p>
              <p className="text-gray-300 mt-4 text-sm">{job.description}</p>
              <button className="mt-6 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold rounded-lg transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-2">Didn't find your role?</p>
          <p className="text-gray-300 mb-4">
            Send us your resume at{" "}
            <a
              href="mailto:careers@nexatechsol.com"
              className="text-blue-400 hover:text-yellow-400 underline"
            >
              careers@nexatechsol.com
            </a>
          </p>
          <a
            href="mailto:careers@nexatechsol.com"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
          >
            Submit Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;
