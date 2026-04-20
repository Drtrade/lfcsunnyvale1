import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import contactData from "../data/contactData";

const ContactPage = () => {
  // Replace 'mdaygabk' with your actual Formspree ID if it changes
  const [state, handleSubmit] = useForm("xyklpoyg");

  // Success State View
  if (state.succeeded) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl text-center max-w-lg border-2 border-green-100"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Message Sent!
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Thank you for reaching out. Your inquiry has been delivered to
            greenplaystudio47@gmail.com, and we will get back to you shortly.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-10 md:space-y-16 px-4 md:px-0 pb-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-lg"
        >
          <MessageSquare className="text-white" size={32} />
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 px-2">
          {contactData.headline}
        </h1>
        <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
          {contactData.introText}
        </p>
      </motion.div>

{/* Map Section */}
      <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-gray-100 h-96">
        <iframe
          src={contactData.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Church Location"
        ></iframe>
      </div>

    
      {/* Contact Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Side: Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 space-y-6 order-2 lg:order-1"
        >
         

          {/* Social Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-gray-100 text-center">
            <h4 className="font-bold text-gray-800 mb-4">Follow Our Updates</h4>
            <div className="flex justify-center gap-4">
              <a
                href={contactData.socialMedia.facebook}
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-3 order-1 lg:order-2"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            {state.errors && (
              <div className="mb-6 p-4 bg-red-50 rounded-lg flex items-center gap-3 text-red-700">
                <AlertCircle size={20} />
                <p>
                  There was an error with your submission. Please check your
                  inputs.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="_replyto"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Subject
                </label>
                <select
                  name="_subject"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none bg-white"
                  required
                >
                  <option value="">Select a subject</option>
                  {contactData.formSubjects.map((s, i) => (
                    <option key={i} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none resize-none"
                  placeholder="How can we help you?"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 ${state.submitting ? "opacity-70" : ""}`}
              >
                {state.submitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
       
       {/* Contact Information */}
        </motion.div>

         <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    {contactData.contactDetails.address.line1}
                    <br />
                    {contactData.contactDetails.address.line2}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    {contactData.contactDetails.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm md:text-base break-all">
                    {contactData.contactDetails.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

      </section>

      {/* Restored Closing Message Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-[40px] p-8 md:p-16 text-center border-2 border-blue-100 relative overflow-hidden"
      >
        {/* Decorative Background Icon */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-5">
          <CheckCircle size={200} />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 md:mb-8 flex items-center justify-center shadow-md">
            <CheckCircle className="text-white" size={24} md:size={32} />
          </div>
          <p className="text-gray-700 text-lg md:text-2xl font-medium leading-relaxed italic px-2">
            "{contactData.closingMessage}"
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            <div className="w-2 h-2 rounded-full bg-purple-600"></div>
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
