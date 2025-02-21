import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <div className="relative w-full min-h-screen flex flex-col justify-center">
        {/* Full-screen Background Map */}
        <div className="absolute inset-0 -z-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.171618559!2d38.7892!3d9.0252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sBole%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1709672135185!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>
        </div>

        {/* Contact Form Section */}
        <div className="relative flex flex-col lg:flex-row h-full w-full px-4 sm:px-8 md:px-12 py-12">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="bg-white bg-opacity-90 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-lg shadow-lg max-w-lg w-full">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Let's Get In Touch
              </h1>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-lg font-medium text-gray-700 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-lg font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-900 text-white py-3 px-6 rounded-md hover:bg-teal-900 transition-all"
                >
                  Send to Us
                </button>
              </form>

              {/* Contact Information */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhone className="w-5 h-5 text-blue-600" />
                  <span className="text-lg text-black">+251 90 000 0000</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-5 h-5 text-blue-600" />
                  <span className="text-lg text-black">contact@140.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />
                  <div className="text-lg text-black">
                    <p>Morning Star Mall, Bole Road, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Empty space for background on larger screens */}
          <div className="hidden lg:flex lg:w-1/2"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
