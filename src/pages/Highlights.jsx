import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const highlights = [
  {
    title: "AI-Based Chatbot Deployment",
    description: "Successfully deployed a custom AI chatbot for a leading e-commerce platform.",
  },
  {
    title: "Mobile App Launch",
    description: "Released a cross-platform mobile app that gained 50K+ downloads in 3 months.",
  },
  {
    title: "Cloud Migration Project",
    description: "Migrated 120+ systems to AWS cloud for an enterprise client.",
  },
  {
    title: "Cybersecurity Audit",
    description: "Conducted security audits across 5 fintech companies and mitigated 200+ vulnerabilities.",
  },
];

const Highlights = () => {
  return (
    <div className="bg-slate-800 py-10 px-4 text-gray-300">
      <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
        Our Highlights
      </h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {highlights.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-blue-900 transition">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Highlights;