import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Mail, 
  Clock,
  ChevronRight,
  X,
  Calendar,
  MessageCircle
} from 'lucide-react';
import unitsData from '../data/unitsData';

// WhatsApp helper — builds the wa.me URL with a pre-filled message
const openWhatsApp = (number, message) => {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${number}?text=${encoded}`, '_blank');
};

const UnitsPage = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedUnit) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedUnit]);

  const closeModal = () => setSelectedUnit(null);

  const categoryColors = {
    ministry: 'bg-blue-600',
    leadership: 'bg-purple-600',
    operations: 'bg-green-600',
    creative: 'bg-orange-600'
  };

  const categoryBorders = {
    ministry: 'border-blue-200 hover:border-blue-400',
    leadership: 'border-purple-200 hover:border-purple-400',
    operations: 'border-green-200 hover:border-green-400',
    creative: 'border-orange-200 hover:border-orange-400'
  };

  return (
    <div className="space-y-16">
      
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
          className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center"
        >
          <Heart className="text-white" size={40} />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {unitsData.headline}
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {unitsData.introText}
        </p>
      </motion.div>

      {/* Units Grid */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unitsData.units.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all border-2 ${categoryBorders[unit.category]}`}
              onClick={() => setSelectedUnit(unit)}
            >
              {/* Card Header */}
              <div className={`${categoryColors[unit.category]} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <Users size={32} />
                    <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full uppercase">
                      {unit.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{unit.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {unit.shortDesc}
                </p>

                {unit.meetingTime && (
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <Clock size={16} className="text-blue-600" />
                    <span>{unit.meetingTime}</span>
                  </div>
                )}

                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 group">
                  <span>Learn More</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Note Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
        
        <div className="relative z-10">
          <Heart className="mx-auto mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {unitsData.closingNote.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {unitsData.closingNote.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {unitsData.closingNote.cta.map((button, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  index === 0
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-white/20 border-2 border-white text-white hover:bg-white/30'
                } px-8 py-4 rounded-lg font-bold transition-all shadow-lg`}
              >
                {button.text}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Unit Detail Modal */}
      <AnimatePresence>
        {selectedUnit && (
          <>
            {/* Backdrop — clicking it closes the modal */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-60 z-50"
              onClick={closeModal}
            />

            {/* Scroll container — sits above backdrop, does NOT catch clicks except on children */}
            <div
              className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto pointer-events-none"
              style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
            >
              <motion.div
                key="modal"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl pointer-events-auto"
                // Do NOT call stopPropagation here — backdrop handles its own click
              >
                {/* Modal Header */}
                <div className={`${categoryColors[selectedUnit.category]} p-8 text-white relative overflow-hidden rounded-t-2xl`}>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24 pointer-events-none"></div>
                  
                  {/* ✅ Fixed: button is above decorative overlays in stacking order */}
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
                    style={{ zIndex: 10 }}
                    aria-label="Close modal"
                  >
                    <X size={22} />
                  </button>

                  <div className="relative" style={{ zIndex: 1 }}>
                    <div className="flex items-center space-x-3 mb-4">
                      <Users size={40} />
                      <span className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full uppercase">
                        {selectedUnit.category}
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold mb-3">{selectedUnit.name}</h2>
                    
                    <div className="flex flex-wrap gap-4">
                      {selectedUnit.ageGroup && (
                        <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg">
                          <Users size={18} />
                          <span className="font-medium">{selectedUnit.ageGroup}</span>
                        </div>
                      )}
                      {selectedUnit.meetingTime && (
                        <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg">
                          <Clock size={18} />
                          <span className="font-medium">{selectedUnit.meetingTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-8 space-y-8">
                  
                  {/* Full Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">About This Ministry</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {selectedUnit.fullDesc}
                    </p>
                  </div>

                  {/* Specializations */}
                  {selectedUnit.specializations && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Specializations</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedUnit.specializations.map((spec, index) => (
                          <div key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                            <ChevronRight className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                            <span className="text-gray-700">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Leadership Team */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Leadership Team</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      
                      {/* Leader */}
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 shadow-lg relative overflow-hidden">
                          {selectedUnit.leadership.leader.image ? (
                            <img
                              src={selectedUnit.leadership.leader.image}
                              alt={selectedUnit.leadership.leader.name}
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '130%',
                                objectFit: 'cover',
                                objectPosition: 'top center'
                              }}
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Users className="text-white" size={48} />
                            </div>
                          )}
                        </div>
                        <h4 className="font-bold text-gray-800 text-lg mb-1">
                          {selectedUnit.leadership.leader.name}
                        </h4>
                        <p className="text-sm text-blue-600 font-semibold mb-3">
                          {selectedUnit.leadership.leader.title}
                        </p>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {selectedUnit.leadership.leader.bio}
                        </p>
                        <a
                          href={`mailto:${selectedUnit.leadership.leader.contact}`}
                          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                        >
                          <Mail size={16} />
                          <span>Contact</span>
                        </a>
                      </div>

                      {/* Assistant Leader */}
                      <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-teal-600 rounded-full mx-auto mb-4 shadow-lg relative overflow-hidden">
                          {selectedUnit.leadership.assistant.image ? (
                            <img
                              src={selectedUnit.leadership.assistant.image}
                              alt={selectedUnit.leadership.assistant.name}
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '130%',
                                objectFit: 'cover',
                                objectPosition: 'top center'
                              }}
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Users className="text-white" size={48} />
                            </div>
                          )}
                        </div>
                        <h4 className="font-bold text-gray-800 text-lg mb-1">
                          {selectedUnit.leadership.assistant.name}
                        </h4>
                        <p className="text-sm text-green-600 font-semibold mb-3">
                          {selectedUnit.leadership.assistant.title}
                        </p>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {selectedUnit.leadership.assistant.bio}
                        </p>
                        <a
                          href={`mailto:${selectedUnit.leadership.assistant.contact}`}
                          className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
                        >
                          <Mail size={16} />
                          <span>Contact</span>
                        </a>
                      </div>

                      {/* Secretary */}
                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full mx-auto mb-4 shadow-lg relative overflow-hidden">
                          {selectedUnit.leadership.secretary.image ? (
                            <img
                              src={selectedUnit.leadership.secretary.image}
                              alt={selectedUnit.leadership.secretary.name}
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '130%',
                                objectFit: 'cover',
                                objectPosition: 'top center'
                              }}
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Users className="text-white" size={48} />
                            </div>
                          )}
                        </div>
                        <h4 className="font-bold text-gray-800 text-lg mb-1">
                          {selectedUnit.leadership.secretary.name}
                        </h4>
                        <p className="text-sm text-orange-600 font-semibold mb-3">
                          {selectedUnit.leadership.secretary.title}
                        </p>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {selectedUnit.leadership.secretary.bio}
                        </p>
                        <a
                          href={`mailto:${selectedUnit.leadership.secretary.contact}`}
                          className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                        >
                          <Mail size={16} />
                          <span>Contact</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Requirements */}
                  {selectedUnit.requirements && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">How to Join</h3>
                      <div className="bg-blue-50 rounded-xl p-6">
                        <p className="text-gray-700 mb-4 font-medium">To serve in this unit, you should have:</p>
                        <ul className="space-y-2">
                          {selectedUnit.requirements.map((req, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">{index + 1}</span>
                              </div>
                              <span className="text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* ✅ Action Buttons — now open WhatsApp with pre-filled messages */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() =>
                        openWhatsApp(
                          selectedUnit.whatsapp.number,
                          selectedUnit.whatsapp.joinMessage
                        )
                      }
                      className={`flex-1 ${categoryColors[selectedUnit.category]} text-white py-4 rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center space-x-2`}
                    >
                      <Calendar size={20} />
                      <span>Join This Unit</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        openWhatsApp(
                          selectedUnit.whatsapp.number,
                          selectedUnit.whatsapp.contactMessage
                        )
                      }
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold transition-all flex items-center justify-center space-x-2"
                    >
                      <MessageCircle size={20} />
                      <span>Contact Leadership</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UnitsPage;
