import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Heart, 
  Users, 
  Target, 
  Compass, 
  Star, 
  Shield,
  TrendingUp,
  Mail,
  Quote,
  User
} from 'lucide-react';
import aboutData from '../data/aboutData';

const AboutPage = () => {
  // Icon mapping for core values
  const getIcon = (iconName, size = 32) => {
    const icons = {
      book: <BookOpen size={size} />,
      heart: <Heart size={size} />,
      hands: <Users size={size} />,
      star: <Star size={size} />,
      shield: <Shield size={size} />,
      target: <Target size={size} />,
      compass: <Compass size={size} />
    };
    return icons[iconName] || <BookOpen size={size} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const navigate = useNavigate();
  return (
    <div className="space-y-12 md:space-y-20 px-4 md:px-0 pb-16">
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg text-white"
        >
          <Users size={32} />
        </motion.div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{aboutData.headline}</h1>
        <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">{aboutData.introText}</p>
      </motion.div>

      {/* Vision & Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {[aboutData.vision, aboutData.mission].map((item, idx) => (
          <motion.div
            key={idx}
            className={`bg-gradient-to-br ${idx === 0 ? 'from-blue-600 to-indigo-700' : 'from-purple-600 to-pink-600'} rounded-2xl p-6 md:p-10 text-white relative overflow-hidden shadow-xl`}
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                {getIcon(item.icon, 24)}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h2>
              <p className="text-lg leading-relaxed text-white/90">{item.statement}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Core Values */}
      <section>
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">{aboutData.coreValues.title}</h2>
          <p className="text-gray-500">Our guiding principles</p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {aboutData.coreValues.values.map((value, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="text-blue-600 mb-4 flex justify-center">{getIcon(value.icon, 24)}</div>
              <h3 className="font-bold text-gray-800 mb-1">{value.name}</h3>
              <p className="text-xs text-gray-500">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gray-50 rounded-3xl p-6 md:p-16 border border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">{aboutData.leadership.title}</h2>
        </div>

        {/* Resident Pastor Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-xl mb-12 max-w-5xl mx-auto overflow-hidden border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center text-center md:text-left">
            <div className="relative group flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center border-4 border-white shadow-lg">
                {aboutData.leadership.residentPastor.image ? (
                  <img 
                    src={aboutData.leadership.residentPastor.image} 
                    alt={aboutData.leadership.residentPastor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <User className="text-gray-300" size={80} />
                )}
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="mb-4">
                <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-1">{aboutData.leadership.residentPastor.name}</h3>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-sm md:text-base">{aboutData.leadership.residentPastor.title}</p>
              </div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 italic">"{aboutData.leadership.residentPastor.description}"</p>
              <a
                href={`mailto:${aboutData.leadership.residentPastor.email}`}
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-200 w-full sm:w-auto justify-center"
              >
                <Mail size={18} />
                <span>Message Pastor</span>
              </a>
            </div>
          </div>
        </motion.div>


        {/* Assistant Resident Pastor Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-xl mb-12 max-w-5xl mx-auto overflow-hidden border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center text-center md:text-left">
            <div className="relative group flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center border-4 border-white shadow-lg">
                {aboutData.leadership. assistantPastor.image ? (
                  <img 
                    src={aboutData.leadership. assistantPastor.image} 
                    alt={aboutData.leadership. assistantPastor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <User className="text-gray-300" size={80} />
                )}
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="mb-4">
                <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-1">{aboutData.leadership. assistantPastor.name}</h3>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-sm md:text-base">{aboutData.leadership. assistantPastor.title}</p>
              </div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 italic">"{aboutData.leadership. assistantPastor.description}"</p>
              <a
                href={`mailto:${aboutData.leadership. assistantPastor.email}`}
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-200 w-full sm:w-auto justify-center"
              >
                <Mail size={18} />
                <span>Message Pastor</span>
              </a>
            </div>
          </div>
        </motion.div>

        
       
      </section>

      {/* Our Story & Milestones */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">{aboutData.story.title}</h2>
        </div>
        <div className="max-w-4xl mx-auto mb-16 relative bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 italic text-center text-gray-700 text-lg md:text-xl">
          <Quote className="text-blue-100 absolute top-4 left-4" size={40} />
          {aboutData.story.content}
        </div>

        <div className="relative max-w-5xl mx-auto space-y-12 md:space-y-0">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-100 hidden md:block"></div>
          {aboutData.story.milestones.map((m, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} md:mb-16`}>
              <div className="md:w-1/2 p-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">{m.year}</span>
                  <h3 className="font-bold text-gray-800 text-lg">{m.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{m.description}</p>
                </div>
              </div>
              <div className="hidden md:flex w-8 h-8 bg-white border-4 border-blue-600 rounded-full z-10 items-center justify-center"><TrendingUp size={12} className="text-blue-600" /></div>
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats & CTA */}
      <section className="bg-gray-900 rounded-3xl p-8 md:p-16 text-white text-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutData.stats.map((s, i) => (
            <div key={i}><div className="text-4xl md:text-5xl font-black text-blue-500">{s.number}</div><div className="text-xs text-gray-400 font-bold uppercase mt-2 tracking-widest">{s.label}</div></div>
          ))}
        </div>
      </section>

      <section className="text-center p-10 border-2 border-dashed border-gray-200 rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Join Our Growing Family</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => navigate('/services')} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg">Plan Your Visit</button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;