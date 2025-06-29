import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-900 text-gray-300 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">Contact Us</h1>
          <p className="text-blue-400 max-w-xl mx-auto">
            Have a question, project idea, or partnership opportunity? Let's connect!
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-slate-800 p-8 rounded-xl shadow-md border border-slate-700 w-full"
          >
            {/* Web3Forms Hidden Inputs */}
            <input type="hidden" name="access_key" value="a66b576e-4f4d-485b-a10a-2412f72e0a85" />
            <input type="hidden" name="subject" value="New Message from Nexatechsol Website" />
            <input type="hidden" name="from_name" value="Nexatechsol Website" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            {/* Name Field */}
            <div className="mb-4">
              <label className="block mb-1 text-sm text-blue-400">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-gray-200 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block mb-1 text-sm text-blue-400">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-gray-200 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label className="block mb-1 text-sm text-blue-400">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-gray-200 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info & Map */}
          <div className="bg-slate-800 p-8 rounded-xl shadow-md border border-slate-700">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Get in Touch</h2>
            <p className="text-gray-400 text-sm mb-4">
              Reach out for queries, partnerships, or service discussions.
            </p>

            <ul className="text-sm space-y-3 mb-6">
              <li>
                📧 Email:{" "}
                <a
                  href="mailto:nexatechsol@gmail.com"
                  className="text-blue-400 hover:text-yellow-400"
                >
                  nexatechsol@gmail.com
                </a>
              </li>
              <li>
                📞 Phone: <span className="text-gray-300">+92 323 6148322</span>
              </li>
            </ul>

            {/* Address Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Office Address</h3>
              <p className="text-sm text-gray-400">
                Nexatechsol Pvt. Ltd.<br />
                3rd Floor, TechHub Plaza,<br />
                Shahrah-e-Faisal, Karachi,<br />
                Pakistan - 75400
              </p>
            </div>

            {/* Google Map */}
            <iframe
              title="Nexatechsol Location"
              src="https://maps.google.com/maps?q=Shahrah-e-Faisal%2C%20Karachi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-56 border border-slate-600 rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
