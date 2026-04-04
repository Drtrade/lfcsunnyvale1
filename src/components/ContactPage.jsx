import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube,
  Twitter,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import contactData from '../data/contactData';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ submitted: false, success: false, error: false, message: '' });

    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        error: true,
        message: 'Please fill in all required fields'
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        error: true,
        message: 'Please enter a valid email address'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus({
        submitted: true,
        success: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ fullName: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, error: false, message: '' });
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        error: true,
        message: 'Sorry, there was an error sending your message.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <MessageSquare className="text-white" size={32} md:size={40} />
        </motion.div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 px-2">
          {contactData.headline}
        </h1>
        
        <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
          {contactData.introText}
        </p>
      </motion.div>

      {/* Contact Form and Info Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Contact Information - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 space-y-6 order-2 lg:order-1"
        >
          {/* Contact Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={20} md:size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {contactData.contactDetails.address.line1}<br />
                    {contactData.contactDetails.address.line2}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600" size={20} md:size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <a href={`tel:${contactData.contactDetails.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base">
                    {contactData.contactDetails.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-purple-600" size={20} md:size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <a href={`mailto:${contactData.contactDetails.email}`} className="text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base break-all">
                    {contactData.contactDetails.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours Card */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4">{contactData.officeHours.title}</h3>
            <div className="space-y-3">
              {contactData.officeHours.schedule.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-white/10 rounded-lg p-3 text-sm md:text-base">
                  <span className="font-medium">{item.days}</span>
                  <span className="text-white/90">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">Connect With Us</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Facebook, color: 'bg-blue-600', url: contactData.socialMedia.facebook },
                { icon: Instagram, color: 'bg-pink-600', url: contactData.socialMedia.instagram },
                { icon: Youtube, color: 'bg-red-600', url: contactData.socialMedia.youtube },
                { icon: Twitter, color: 'bg-sky-500', url: contactData.socialMedia.twitter }
              ].map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 md:w-12 md:h-12 ${social.color} hover:opacity-90 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-md`}>
                  <social.icon className="text-white" size={18} md:size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-3 order-1 lg:order-2"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-gray-100 h-full">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

            {formStatus.submitted && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`mb-6 p-4 rounded-lg flex items-start space-x-3 text-sm md:text-base ${formStatus.success ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
                {formStatus.success ? <CheckCircle className="text-green-600 flex-shrink-0" size={20} /> : <AlertCircle className="text-red-600 flex-shrink-0" size={20} />}
                <p className={formStatus.success ? 'text-green-700' : 'text-red-700'}>{formStatus.message}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none text-sm" placeholder="Full name" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none text-sm" placeholder="your@email.com" required />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Subject <span className="text-red-500">*</span></label>
                <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none bg-white text-sm" required>
                  <option value="">Select a subject</option>
                  {contactData.formSubjects.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Message / Inquiry <span className="text-red-500">*</span></label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none resize-none text-sm" placeholder="How can we help you?" required></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 md:py-4 rounded-lg shadow-lg transition-all flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-70' : ''}`}
              >
                {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <><Send size={18} /><span>Send Message</span></>}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 md:p-6 text-white text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-bold mb-1">Find Us</h2>
          <p className="text-white/90 text-sm md:text-base">Visit us at our church location</p>
        </div>
        <div className="w-full h-64 md:h-96">
          <iframe
            src={contactData.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </motion.section>

      {/* Closing Message */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-12 text-center border-2 border-blue-100"
      >
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-md">
            <CheckCircle className="text-white" size={24} md:size={32} />
          </div>
          <p className="text-gray-700 text-lg md:text-2xl font-medium leading-relaxed italic px-2">
            "{contactData.closingMessage}"
          </p>
        </div>
      </motion.section>

    </div>
  );
};

export default ContactPage;