import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, Users, Heart, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import homeData from '../data/homeData';

const HomePage = () => {
  const navigate = useNavigate();

  const getUpcomingService = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute;
    const date = now.getDate();
    const isFirstWeek = date <= 7;

    if (day >= 1 && day <= 5 && currentTime < 420) {
      return {
        title: "Covenant Hour of Prayer (CHOP)",
        time: "6:00 AM - 7:00 AM",
        day: "Today",
        description: "Start your day with powerful intercession and divine connection",
        type: "prayer",
      };
    }
    if (day === 6 && currentTime < 480) {
      return {
        title: "Covenant Hour of Prayer (CHOP)",
        time: "7:00 AM - 8:00 AM",
        day: "Today",
        description: "Start your day with powerful intercession and divine connection",
        type: "prayer",
      };
    }
    if (day === 0) {
      if (currentTime < 540) {
        return {
          title: "Sunday Celebration Service - First Service",
          time: "7:00 AM - 9:00 AM",
          day: "Today",
          description: "Join us for powerful worship, inspiring messages, and divine encounters",
          type: "celebration",
        };
      } else if (currentTime < 660) {
        return {
          title: "Sunday Celebration Service - Second Service",
          time: "9:00 AM - 11:00 AM",
          day: "Today",
          description: "Join us for powerful worship, inspiring messages, and divine encounters",
          type: "celebration",
        };
      } else {
        return {
          title: "Sunday Celebration Service",
          time: "7:00 AM - 9:00 AM or 9:00 AM - 11:00 AM",
          day: "Next Sunday",
          description: "Join us for powerful worship, inspiring messages, and divine encounters",
          type: "celebration",
        };
      }
    }
    if (isFirstWeek && day >= 3 && day <= 5 && currentTime < 1140) {
      return {
        title: "Spiritual Week of Emphases",
        time: "5:30 PM - 7:00 PM",
        day: day === 3 ? "Today (Wednesday)" : day === 4 ? "Today (Thursday)" : "Today (Friday)",
        description: "A special week of spiritual renewal, teaching, and breakthrough",
        type: "special",
      };
    }
    if (day === 3 && currentTime < 1140 && !isFirstWeek) {
      return {
        title: "Midweek Communion Service",
        time: "5:30 PM - 7:00 PM",
        day: "Today (Wednesday)",
        description: "Experience the transforming power of communion and the Word",
        type: "communion",
      };
    }
    if ((day === 0 && currentTime >= 660) || day === 1 || day === 2) {
      return {
        title: "Midweek Communion Service",
        time: "5:30 PM - 7:00 PM",
        day: "Wednesday",
        description: "Experience the transforming power of communion and the Word",
        type: "communion",
      };
    }
    return {
      title: "Sunday Celebration Service",
      time: "7:00 AM - 9:00 AM or 9:00 AM - 11:00 AM",
      day: "This Sunday",
      description: "Join us for powerful worship, inspiring messages, and divine encounters",
      type: "celebration",
    };
  };

  const upcomingService = getUpcomingService();

  const getServiceColor = (type) => {
    switch (type) {
      case 'celebration': return 'from-blue-600 to-purple-600';
      case 'prayer':      return 'from-orange-500 to-red-600';
      case 'communion':   return 'from-purple-600 to-pink-600';
      case 'special':     return 'from-green-600 to-teal-600';
      default:            return 'from-blue-600 to-purple-600';
    }
  };

  return (
    <div className="space-y-10 md:space-y-16 px-4">

       {/* Hero Section - Updated with Altar Image Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[500px] md:h-[600px] rounded-2xl overflow-hidden flex items-center justify-center bg-gray-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${homeData.hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 text-center max-w-4xl mx-auto py-12">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight"
          >
            {homeData.hero.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base md:text-2xl mb-6 md:mb-10 max-w-2xl opacity-90"
          >
            {homeData.hero.subtitle}
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/services')}
            className="bg-red-500 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-2xl hover:bg-red-700 transition-all flex items-center space-x-2 active:scale-95"
          >
            <span>{homeData.hero.buttonText}</span>
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </motion.section>

      {/* Intro Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 md:p-12 shadow-lg border-2 border-blue-100"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <Heart className="text-white" size={32} />
            </motion.div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">{homeData.intro.title}</h2>
            <p className="text-gray-700 text-base md:text-xl leading-relaxed">{homeData.intro.description}</p>
          </div>
        </motion.div>
      </section>

      {/* Upcoming Services */}
      <section className="space-y-6">
        <motion.div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Upcoming Services & Events</h2>
          <p className="text-gray-600 text-base md:text-lg">Don't miss out on what God is doing</p>
        </motion.div>

        {/* Dynamic Service Card */}
        <motion.div className={`bg-gradient-to-br ${getServiceColor(upcomingService.type)} p-6 md:p-12 rounded-2xl shadow-2xl text-white relative overflow-hidden`}>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4">
                  <span className="font-semibold text-sm md:text-base">{upcomingService.day}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold mb-4">{upcomingService.title}</h3>
                <p className="text-lg md:text-xl text-white/90 mb-6">{upcomingService.description}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg text-sm md:text-base">
                    <Clock size={18} />
                    <span className="font-medium">{upcomingService.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg text-sm md:text-base">
                    <MapPin size={18} />
                    <span className="font-medium">{homeData.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3 w-full md:w-auto">
                <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2">
                  <Calendar size={20} />
                  <span>Add to Calendar</span>
                </button>
                <button className="bg-white/20 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-all flex items-center justify-center space-x-2">
                  <span>Get Directions</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Weekly Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {homeData.weeklyServices.map((service, i) => (
            <div key={i} className={`bg-white p-6 rounded-xl shadow-lg border-2 ${service.colorBorder}`}>
              <div className={`w-12 h-12 ${service.colorBg} rounded-full flex items-center justify-center mb-4`}>
                <Calendar className={service.colorIcon} size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h4>
              <div className="space-y-2 text-sm text-gray-700">
                {service.times.map((time, j) => (
                  <p key={j} className="flex items-center">
                    <Clock size={14} className={`mr-2 ${service.colorIcon}`} />
                    {time}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Users className="text-white" size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{homeData.about.title}</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg mb-6">{homeData.about.description}</p>
              <button
                onClick={() => navigate('/about')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold w-full md:w-auto flex items-center justify-center space-x-2"
              >
                <span>{homeData.about.buttonText}</span>
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {homeData.about.stats.map((stat, i) => (
                <div key={i} className="bg-white p-4 md:p-6 rounded-xl shadow-lg text-center">
                  <h3 className={`text-2xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.val}</h3>
                  <p className="text-gray-600 text-xs md:text-base font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mandate & What to Expect */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 md:p-10 text-white shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
            <Quote size={24} /> Our Mandate
          </h3>
          <p className="text-base md:text-xl italic mb-4">"{homeData.mandate.quote}"</p>
          <p className="text-right font-bold text-white/90">– {homeData.mandate.author}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border-2 border-purple-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">{homeData.whatToExpect.title}</h3>
          <p className="text-gray-700 text-base md:text-lg mb-6">{homeData.whatToExpect.description}</p>
        </div>
      </section>

      {/* Testimonies */}
      <section className="space-y-6 pb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Life-Changing Testimonies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homeData.testimonies.map((testimony, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden text-left border border-gray-100">
              <div className={`h-24 bg-gradient-to-br ${testimony.image} flex items-center justify-center`}>
                <Quote className="text-white" size={32} />
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm italic mb-4 line-clamp-4">"{testimony.testimony}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-800">{testimony.name}</h4>
                  <p className="text-xs text-gray-500">{testimony.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;