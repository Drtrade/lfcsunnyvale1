import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  BookOpen, 
  Heart,
  Sparkles,
  Star, 
  Flame,
  Target,
  ArrowRight
} from 'lucide-react';
import servicesData, { getNextFastingStartDate } from '../data/servicesData';

const ServicesPage = () => {
  const nextFastingDate = getNextFastingStartDate();

  const getIcon = (iconName, size = 32) => {
    const icons = {
      celebration: <Calendar size={size} />,
      communion: <Heart size={size} />,
      evangelism: <Users size={size} />,
      prayer: <Flame size={size} />,
      special: <Star size={size} />,
      fasting: <BookOpen size={size} />,
      renewal: <Sparkles size={size} />
    };
    return icons[iconName] || <Calendar size={size} />;
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
          <Calendar className="text-white" size={32} md:size={40} />
        </motion.div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 px-2">
          {servicesData.headline}
        </h1>
        
        <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
          {servicesData.introText}
        </p>
      </motion.div>

      {/* Weekly Services Section */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Weekly Service Schedule</h2>
          <p className="text-gray-600 text-sm md:text-base">Join us every week for transformative worship experiences</p>
        </motion.div>

        <div className="grid gap-6">
          {servicesData.weeklyServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border-2 border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Left Section - Icon and Day */}
                <div className={`bg-gradient-to-br ${service.color} p-6 md:p-8 text-white flex flex-col justify-center items-center text-center`}>
                  <div className="mb-3">
                    {getIcon(service.icon, 40)}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{service.day}</h3>
                  <div className="w-12 h-1 bg-white/50 rounded-full"></div>
                </div>

                {/* Right Section - Details */}
                <div className="md:col-span-2 p-6 md:p-8 space-y-4">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{service.title}</h4>
                    {service.currentTheme && (
                      <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-3">
                        <Target className="mr-2" size={14} />
                        Theme: {service.currentTheme}
                      </div>
                    )}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.description}</p>
                    {service.note && (
                      <p className="text-xs md:text-sm text-amber-600 bg-amber-50 px-3 py-2 rounded-lg mt-3 inline-block">
                        <span className="font-semibold">Note:</span> {service.note}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.times.map((timeSlot, idx) => (
                      <div key={idx} className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                        <Clock className="text-blue-600 flex-shrink-0" size={18} />
                        <div className="text-sm">
                          <span className="font-bold text-gray-800 block sm:inline">{timeSlot.service}:</span>
                          <span className="text-gray-600 sm:ml-2">{timeSlot.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-start space-x-2 text-gray-500 pt-2 border-t border-gray-50">
                    <MapPin size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm leading-snug">Living Faith Church, 123 Faith Avenue, Sunnyvale, CA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Monthly Programs */}
      {servicesData.monthlyPrograms?.length > 0 && (
        <section className="space-y-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Monthly Programs</h2>
            <p className="text-gray-600 text-sm md:text-base">Special monthly gatherings for spiritual growth</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {servicesData.monthlyPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`bg-gradient-to-br ${program.color} rounded-2xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden`}
              >
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      {getIcon(program.icon, 32)}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{program.title}</h3>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-lg text-xs md:text-sm">
                        <Calendar size={16} />
                        <span className="font-semibold">{program.schedule}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-lg text-xs md:text-sm">
                        <Clock size={16} />
                        <span className="font-semibold">{program.time}</span>
                      </div>
                    </div>
                    <p className="text-white/90 text-sm md:text-lg leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Special Programs */}
      <section className="space-y-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Special Programs</h2>
          <p className="text-gray-600 text-sm md:text-base">Annual flagship events and spiritual gatherings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.specialPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className={`bg-gradient-to-br ${program.color} p-6 text-white`}>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  {getIcon(program.icon, 24)}
                </div>
                <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                <div className="flex items-center space-x-2 text-white/80 text-sm">
                  <Calendar size={14} />
                  <span>{program.dates}</span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">
                  {program.description}
                </p>

                {program.highlights && (
                  <ul className="space-y-2 py-2">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="text-blue-600 mt-1 flex-shrink-0" size={14} />
                        <span className="text-gray-600 text-xs md:text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button className={`w-full bg-gradient-to-r ${program.color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center space-x-2 text-sm`}>
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-14 text-white text-center relative overflow-hidden shadow-2xl"
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Experience God's Presence?</h2>
          <p className="text-sm md:text-xl text-white/90 mb-8 leading-relaxed">
            Join us for any of our services and experience the life-transforming power of God's Word.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-lg flex items-center justify-center space-x-2 text-sm md:text-base">
              <MapPin size={18} />
              <span>Get Directions</span>
            </button>
            <button className="bg-white/10 border-2 border-white/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center space-x-2 text-sm md:text-base">
              <Calendar size={18} />
              <span>Plan Your Visit</span>
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;