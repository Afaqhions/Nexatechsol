import React from "react";

const About = () => {
  return (
    <div className="bg-slate-900 text-gray-300 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
            About Nexatechsol
          </h1>
          <p className="text-blue-400 max-w-3xl mx-auto">
            Nexatechsol is a forward-thinking technology company dedicated to
            delivering custom software solutions, digital innovation, and
            seamless user experiences to businesses of all sizes.
          </p>
        </div>
        {/* Core Values */}
        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-blue-900 transition border border-slate-700">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              CEO Message
            </h2>
            <p className="text-sm text-gray-400">
              At NexaTechSol, we harness technology as a catalyst for
              transformation. Driven by innovation, quality, and a deep
              understanding of our clients' evolving needs, we strive to lead
              with purpose. Our talented team is highly committed to deliver
              cutting-edge, sustainable, and impactful solutions which reflect
              our core values: excellence, integrity, and collaboration. We
              focus on building lasting partnerships, fostering innovation, and
              empowering everyone through technology. Join us on this exciting
              journey as we innovate and achieve new milestones together. <br /><br />
              Warm regards,
              <br /><br />
              <b className="font-extrabold text-[1.2rem]">Zeshan Haider</b>
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-blue-900 transition border border-slate-700">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              Director Message
            </h2>
            <p className="text-sm text-gray-400">
              At NexaTechSol, we deliver excellence through innovative solutions
              that empower businesses and improve lives. Our impassioned team
              shares a vision to turn today's challenges into tomorrow's
              opportunities. With quality at our core, we strive to exceed
              expectations and foster meaningful relationships with our clients,
              partners, and stakeholders. Together, we aim to push boundaries,
              redefine possibilities, and make a lasting impact in technology.
              Thank you for trusting NexaTechSol as your innovation partner.
              Let's shape the future together.
              <br /><br /> Sincere regards
              <br /><br />
              <b className="font-extrabold text-[1.2rem]">Mrs. Haider</b>
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-blue-900 transition border border-slate-700">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              Our Mission
            </h2>
            <p className="text-sm text-gray-400">
              At NexaTechSol, our mission is to empower businesses and individuals through cutting-edge IT solutions, expert consultancy, and high-quality training. We are committed to delivering innovative software and e-commerce services that drive growth, efficiency, and digital transformation for our clients worldwide. To empower businesses by developing cutting-edge digital solutions
              that solve real-world problems, enhance productivity, and drive
              success. 
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-blue-900 transition transition border border-slate-700">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              Our Vision
            </h2>
            <p className="text-sm text-gray-400">
              At NexaTechSol, we specialize in delivering tailored technology solutions that address the dynamic needs of modern businesses.
Our mission is to bridge the gap between business challenges and technological advancements, empowering organizations through cutting-edge software, IT services, and digital transformation strategies. To provide reliable, scalable, and innovative technology solutions
              that drive business growth and operational efficiency.
            </p>
          </div>
        </div>

        {/* Team Info */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Team</h2>
          <p className="text-blue-400 max-w-2xl mx-auto mb-6">
            To be a trusted partner in the global tech landscape, enabling
            businesses to thrive in an ever-evolving digital world.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {/* Member 1 */}
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-md hover:shadow-blue-900 transition text-left">
              <div className="h-32 w-32 mx-auto rounded-full bg-slate-700 mb-4"></div>
              <h3 className="text-lg font-semibold text-blue-400 text-center">
                Eng. M Afaq Ahmad
              </h3>
              <p className="text-sm text-gray-400 text-center">
                Project Manager
              </p>
            </div>
             <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-md hover:shadow-blue-900 transition text-left">
              <div className="h-32 w-32 mx-auto rounded-full bg-slate-700 mb-4"></div>
              <h3 className="text-lg font-semibold text-blue-400 text-center">
                Zeeshan Haider
              </h3>
              
              <p className="text-sm text-gray-400 text-center">
                CEO & Founder
              </p>
            </div>
            {/* Member 2 */}
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-md hover:shadow-blue-900 transition text-left">
              <div className="h-32 w-32 mx-auto rounded-full bg-slate-700 mb-4"></div>
              <h3 className="text-lg font-semibold text-blue-400 text-center">
                Mrs. Haider
              </h3>
              
              <p className="text-sm text-gray-400 text-center">
                Director
              </p>
            </div>
            {/* Member 3 */}
           
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold text-yellow-400">
            Want to work with us?
          </h3>
          <p className="text-gray-400 mt-2">
            We're always open to collaborations and new ideas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
