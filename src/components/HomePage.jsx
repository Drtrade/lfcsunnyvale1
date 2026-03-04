import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, Users, Heart, Quote } from 'lucide-react';

const HomePage = () => {
  // Function to get the next upcoming service based on current date/time
  const getUpcomingService = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute; // Convert to minutes
    const date = now.getDate();
    
    // Check if it is the first week of the month (for Spiritual Week of Emphases)
    const isFirstWeek = date <= 7;
    
    // CHOP - Covenant Hour of Prayer (Monday-Friday 6AM-7AM, Saturday 7AM-8AM)
    if (day >= 1 && day <= 5 && currentTime < 420) { // Before 7AM on weekdays
      return {
        title: "Covenant Hour of Prayer (CHOP)",
        time: "6:00 AM - 7:00 AM",
        day: "Today",
        description: "Start your day with powerful intercession and divine connection",
        type: "prayer"
      };
    }
    
    if (day === 6 && currentTime < 480) { // Saturday before 8AM
      return {
        title: "Covenant Hour of Prayer (CHOP)",
        time: "7:00 AM - 8:00 AM",
        day: "Today",
        description: "Start your day with powerful intercession and divine connection",
        type: "prayer"
      };
    }
    
    // Sunday Services
    if (day === 0) {
      if (currentTime < 540) { // Before 9AM
        return {
          title: "Sunday Celebration Service - First Service",
          time: "7:00 AM - 9:00 AM",
          day: "Today",
          description: "Join us for powerful worship, inspiring messages, and divine encounters",
          type: "celebration"
        };
      } else if (currentTime < 660) { // Before 11AM
        return {
          title: "Sunday Celebration Service - Second Service",
          time: "9:00 AM - 11:00 AM",
          day: "Today",
          description: "Join us for powerful worship, inspiring messages, and divine encounters",
          type: "celebration"
        };
      } else {
        // After Sunday services, show next week's service
        return {
          title: "Sunday Celebration Service",
          time: "7:00 AM - 9:00 AM or 9:00 AM - 11:00 AM",
          day: "Next Sunday",
          description: "Join us for powerful worship, inspiring messages, and divine encounters",
          type: "celebration"
        };
      }
    }
    
    // Spiritual Week of Emphases (First Wednesday to Friday of every month, 5:30PM-7PM)
    if (isFirstWeek && day >= 3 && day <= 5 && currentTime < 1140) { // Wed-Fri before 7PM
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return {
        title: "Spiritual Week of Emphases",
        time: "5:30 PM - 7:00 PM",
        day: day === 3 ? "Today (Wednesday)" : day === 4 ? "Today (Thursday)" : "Today (Friday)",
        description: "A special week of spiritual renewal, teaching, and breakthrough",
        type: "special"
      };
    }
    
    // Midweek Communion Service (Every Wednesday 5:30PM-7PM)
    if (day === 3 && currentTime < 1140 && !isFirstWeek) { // Wednesday before 7PM, not first week
      return {
        title: "Midweek Communion Service",
        time: "5:30 PM - 7:00 PM",
        day: "Today (Wednesday)",
        description: "Experience the transforming power of communion and the Word",
        type: "communion"
      };
    }
    
    // Default: Show next upcoming service
    if (day === 0 && currentTime >= 660) { // Sunday after 11AM
      return {
        title: "Midweek Communion Service",
        time: "5:30 PM - 7:00 PM",
        day: "Wednesday",
        description: "Experience the transforming power of communion and the Word",
        type: "communion"
      };
    }
    
    if (day >= 1 && day <= 2) { // Monday or Tuesday
      return {
        title: "Midweek Communion Service",
        time: "5:30 PM - 7:00 PM",
        day: "Wednesday",
        description: "Experience the transforming power of communion and the Word",
        type: "communion"
      };
    }
    
    if (day === 3 && currentTime >= 1140) { // Wednesday after service
      return {
        title: "Sunday Celebration Service",
        time: "7:00 AM - 9:00 AM or 9:00 AM - 11:00 AM",
        day: "This Sunday",
        description: "Join us for powerful worship, inspiring messages, and divine encounters",
        type: "celebration"
      };
    }
    
    if (day >= 4 && day <= 6) { // Thursday to Saturday
      return {
        title: "Sunday Celebration Service",
        time: "7:00 AM - 9:00 AM or 9:00 AM - 11:00 AM",
        day: "This Sunday",
        description: "Join us for powerful worship, inspiring messages, and divine encounters",
        type: "celebration"
      };
    }
    
    // Fallback
    return {
      title: "Sunday Celebration Service",
      time: "7:00 AM - 9:00 AM or 9:00 AM - 11:00 AM",
      day: "This Sunday",
      description: "Join us for powerful worship, inspiring messages, and divine encounters",
      type: "celebration"
    };
  };

  const upcomingService = getUpcomingService();

  // Service type colors
  const getServiceColor = (type) => {
    switch(type) {
      case 'celebration': return 'from-blue-600 to-purple-600';
      case 'prayer': return 'from-orange-500 to-red-600';
      case 'communion': return 'from-purple-600 to-pink-600';
      case 'special': return 'from-green-600 to-teal-600';
      default: return 'from-blue-600 to-purple-600';
    }
  };

  // Testimonies data
  const testimonies = [
    {
      name: "Sarah Johnson",
      testimony: "God miraculously healed my daughter from a chronic illness that doctors said was incurable. Today, she's completely healthy and thriving!",
      role: "Member since 2020",
      image: "from-pink-400 to-rose-500"
    },
    {
      name: "Michael Adebayo",
      testimony: "I was facing bankruptcy, but through the teachings and prayers in this church, God turned my situation around. My business is now flourishing!",
      role: "Member since 2018",
      image: "from-blue-400 to-indigo-500"
    },
    {
      name: "Grace Okafor",
      testimony: "After 10 years of waiting, God blessed me with the fruit of the womb. My testimony is a living miracle, and I'm forever grateful!",
      role: "Member since 2015",
      image: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* Hero Section with Church Image */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[500px] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl overflow-hidden"
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* You can replace this with an actual image */}
        {/* <img src="/path-to-church-image.jpg" alt="LFC Sunnyvale" className="absolute inset-0 w-full h-full object-cover" /> */}
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to Living Faith Church Sunnyvale
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl"
          >
            A place where faith comes alive, families are strengthened, and destinies are fulfilled
          </motion.p>
          
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all flex items-center space-x-2"
          >
            <span>Join Our Next Service</span>
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.section>

      {/* Intro Paragraph Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-blue-100"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <Heart className="text-white" size={40} />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Welcome to Living Faith Church, Sunnyvale Branch
            </h2>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              A home of faith, joy, and transformation. We are a vibrant community of believers passionately pursuing God's presence and power through heartfelt worship, sound teaching, and love for one another. Whether you are new to Sunnyvale or just discovering Winners' Chapel, you're warmly welcome to experience the life-changing Word that works!
            </p>
          </div>
        </motion.div>
      </section>

      {/* Upcoming Services and Events */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Upcoming Services & Events</h2>
          <p className="text-gray-600 text-lg">Don't miss out on what God is doing</p>
        </motion.div>

        {/* Dynamic Upcoming Service Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className={`bg-gradient-to-br ${getServiceColor(upcomingService.type)} p-8 md:p-12 rounded-2xl shadow-2xl text-white relative overflow-hidden`}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4">
                  <span className="font-semibold">{upcomingService.day}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {upcomingService.title}
                </h3>
                
                <p className="text-xl text-white/90 mb-6">
                  {upcomingService.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg">
                    <Clock size={20} />
                    <span className="font-medium">{upcomingService.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg">
                    <MapPin size={20} />
                    <span className="font-medium">123 Faith Avenue, Sunnyvale</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
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

        {/* All Weekly Services Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="text-blue-600" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Sunday Services</h4>
            <p className="text-gray-600 mb-3">Two services every Sunday</p>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-center">
                <Clock size={14} className="mr-2 text-blue-600" />
                1st Service: 7:00 AM - 9:00 AM
              </p>
              <p className="flex items-center">
                <Clock size={14} className="mr-2 text-blue-600" />
                2nd Service: 9:00 AM - 11:00 AM
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="text-purple-600" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Midweek Communion</h4>
            <p className="text-gray-600 mb-3">Every Wednesday</p>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-center">
                <Clock size={14} className="mr-2 text-purple-600" />
                5:30 PM - 7:00 PM
              </p>
              <p className="text-gray-500 text-xs mt-2">
                *Spiritual Week of Emphases: First Wed-Fri of each month
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-orange-600" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">CHOP</h4>
            <p className="text-gray-600 mb-3">Covenant Hour of Prayer</p>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-center">
                <Clock size={14} className="mr-2 text-orange-600" />
                Mon-Fri: 6:00 AM - 7:00 AM
              </p>
              <p className="flex items-center">
                <Clock size={14} className="mr-2 text-orange-600" />
                Saturday: 7:00 AM - 8:00 AM
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Our Church Section */}
      <section>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Users className="text-white" size={32} />
                </div>
                <h2 className="text-4xl font-bold text-gray-800">About Our Church</h2>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Living Faith Church Sunnyvale is a vibrant community of believers committed to spreading the gospel of Jesus Christ and transforming lives through faith, love, and service.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We are a family where everyone belongs, where faith is nurtured, and where God's presence is experienced in powerful ways. Join us as we grow together in Christ and impact our community for the Kingdom.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
              >
                <span>Learn More About Us</span>
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">15+</h3>
                <p className="text-gray-600 font-medium">Years of Ministry</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-4xl font-bold text-purple-600 mb-2">2000+</h3>
                <p className="text-gray-600 font-medium">Active Members</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">50+</h3>
                <p className="text-gray-600 font-medium">Ministries</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-4xl font-bold text-orange-600 mb-2">100+</h3>
                <p className="text-gray-600 font-medium">Weekly Programs</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mandate & What to Expect Section */}
      <section className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Our Mandate */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Quote className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold">Our Mandate</h3>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <p className="text-lg md:text-xl italic leading-relaxed mb-4">
                  "The hour has come to liberate the world from all oppression of the devil through the preaching of the Word of Faith, and I am sending you to undertake this task."
                </p>
                <p className="text-right font-bold text-white/90">
                  – Bishop David Oyedepo
                </p>
              </div>
              
              <p className="text-white/90 leading-relaxed">
                We are committed to this divine mandate, spreading the liberating gospel of Jesus Christ and transforming lives through the power of God's Word.
              </p>
            </div>
          </motion.div>

          {/* What to Expect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-2 border-purple-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">What to Expect</h3>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Living Faith Church Sunnyvale, you'll find passionate worship, insightful Word teachings, warm fellowship, and divine encounters. Every service is designed to help you grow spiritually and live victoriously.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-purple-50 p-4 rounded-lg">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Passionate Worship</h4>
                  <p className="text-gray-600 text-sm">Experience heartfelt worship that ushers you into God's presence</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="text-white" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Insightful Word Teachings</h4>
                  <p className="text-gray-600 text-sm">Receive life-transforming teachings from the Word of God</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-green-50 p-4 rounded-lg">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Warm Fellowship</h4>
                  <p className="text-gray-600 text-sm">Connect with a loving community of believers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-yellow-50 p-4 rounded-lg">
                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="text-white" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Divine Encounters</h4>
                  <p className="text-gray-600 text-sm">Experience the power and presence of God in every service</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonies Section */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Heart className="text-red-500" size={32} />
            <h2 className="text-4xl font-bold text-gray-800">Life-Changing Testimonies</h2>
          </div>
          <p className="text-gray-600 text-lg">See what God is doing in the lives of our members</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonies.map((testimony, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className={`h-32 bg-gradient-to-br ${testimony.image} flex items-center justify-center`}>
                <Quote className="text-white" size={48} />
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 italic mb-4 line-clamp-4">
                  "{testimony.testimony}"
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-800">{testimony.name}</h4>
                  <p className="text-sm text-gray-500">{testimony.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
          >
            <span>Read More Testimonies</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
};

export default HomePage;
