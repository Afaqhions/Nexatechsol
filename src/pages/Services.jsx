import React from "react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your business needs, from desktop applications to complex systems.",
  },
  {
    title: "Web & Mobile App Development",
    description:
      "Responsive, high-performance websites and mobile applications built for modern users across all platforms.",
  },
  {
    title: "UI/UX Design",
    description:
      "Engaging, intuitive user interfaces and seamless user experiences that elevate your brand identity.",
  },
  {
    title: "Traing & Coursess",
    description:
      "We provide industry-focused training and certification courses tailored to current market needs. From technical skills to soft skills, our programs ensure practical and career-oriented learning. Join us to upgrade your expertise and stay ahead in your profession.",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Powerful online stores with payment integration, inventory, and analytics to grow your digital business.",
  },
  {
    title: "IT Consulting",
    description:
      "Expert technical guidance and digital transformation strategies to help your business scale efficiently.",
  },
];

const Services = () => {
  return (
    <div className="bg-slate-900 text-gray-300 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
            Our Services
          </h1>
          <p className="text-blue-400 max-w-2xl mx-auto">
            At Nexatechsol, we offer a wide range of innovative and tailored
            services to support your business growth in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md hover:shadow-blue-900 transition"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-yellow-400">
            Let’s Build Something Great Together
          </h3>
          <p className="text-gray-400 mt-2">
            Get in touch with us today to discuss your project or idea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
