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

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-blue-900 transition border border-slate-700">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              Our Mission
            </h2>
            <p className="text-sm text-gray-400">
              To empower businesses by developing cutting-edge digital solutions
              that solve real-world problems, enhance productivity, and drive
              success.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-blue-900 transition transition border border-slate-700">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              Our Vision
            </h2>
            <p className="text-sm text-gray-400">
              To become a global leader in software innovation and digital
              transformation, known for our reliability, creativity, and impact.
            </p>
          </div>
        </div>

        {/* Team Info */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Team</h2>
          <p className="text-blue-400 max-w-2xl mx-auto mb-6">
            We are a team of software engineers, designers, developers, and
            digital strategists who believe in the power of collaboration,
            innovation, and excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {[1, 2, 3].map((member) => (
              <div
                key={member}
                className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-md hover:shadow-blue-900 transition text-left"
              >
                <div className="h-32 w-32 mx-auto rounded-full bg-slate-700 mb-4"></div>
                <h3 className="text-lg font-semibold text-blue-400 text-center">
                  Team Member {member}
                </h3>
                <p className="text-sm text-gray-400 text-center">
                  Role / Expertise
                </p>
              </div>
            ))}
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
