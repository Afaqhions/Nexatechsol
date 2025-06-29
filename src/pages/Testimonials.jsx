import React from "react";

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Project Manager, InnovateX",
    feedback:
      "Nexatechsol transformed our digital presence with a custom platform that exceeded expectations. The team’s dedication and creativity are unmatched.",
  },
  {
    name: "Omer Ali",
    role: "CTO, Brightify",
    feedback:
      "Reliable, professional, and technically brilliant. Nexatechsol delivered our app ahead of schedule with fantastic support throughout.",
  },
  {
    name: "Ayesha Malik",
    role: "Founder, ShopEase",
    feedback:
      "They built a seamless e-commerce store for us with great UX. Our sales and customer satisfaction increased significantly thanks to their team.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-slate-900 text-gray-300 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">Client Testimonials</h1>
          <p className="text-blue-400 max-w-2xl mx-auto">
            See what our clients are saying about their experience with Nexatechsol.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-blue-900 transition border border-slate-700"
            >
              <p className="text-sm text-gray-400 mb-4 italic">"{t.feedback}"</p>
              <h3 className="text-blue-400 font-semibold">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-yellow-400">
            Want to leave a review?
          </h3>
          <p className="text-gray-400 mt-2">
            We’d love to hear from you. Your feedback helps us grow!
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;