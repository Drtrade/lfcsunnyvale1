import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Heart,
  Mail,
  Clock,
  ChevronRight,
  X,
  Calendar,
  MessageCircle,
} from "lucide-react";
import unitsData from "../data/unitsData";

const openWhatsApp = (number, message) => {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
};

const UnitsPage = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  useEffect(() => {
    if (selectedUnit) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedUnit]);

  const closeModal = () => setSelectedUnit(null);

  const categoryColors = {
    ministry: "bg-blue-600",
    leadership: "bg-purple-600",
    operations: "bg-green-600",
    creative: "bg-orange-600",
  };

  const categoryBorders = {
    ministry: "border-blue-200 hover:border-blue-400",
    leadership: "border-purple-200 hover:border-purple-400",
    operations: "border-green-200 hover:border-green-400",
    creative: "border-orange-200 hover:border-orange-400",
  };

  return (
    <div className="space-y-10 md:space-y-16 px-4 md:px-0">
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
          className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center"
        >
          <Heart className="text-white" size={30} />
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 px-2">
          {unitsData.headline}
        </h1>

        <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
          {unitsData.introText}
        </p>
      </motion.div>

      {/* Units Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {unitsData.units.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all border-2 ${categoryBorders[unit.category]}`}
              onClick={() => setSelectedUnit(unit)}
            >
              <div
                className={`${categoryColors[unit.category]} p-5 md:p-6 text-white relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-12 -mt-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <Users size={28} />
                    <span className="text-[10px] font-semibold bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      {unit.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">{unit.name}</h3>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {unit.shortDesc}
                </p>

                {unit.meetingTime && (
                  <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-500 mb-4">
                    <Clock size={14} className="text-blue-600" />
                    <span>{unit.meetingTime}</span>
                  </div>
                )}

                <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 py-3 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 group border border-gray-100">
                  <span>View Details</span>
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Note Section */}
      <motion.section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
        <div className="relative z-10">
          <Heart className="mx-auto mb-6 opacity-80" size={40} />
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            {unitsData.closingNote.title}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-snug">
            {unitsData.closingNote.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {unitsData.closingNote.cta.map((button, index) => (
              <button
                key={index}
                className={`${
                  index === 0
                    ? "bg-white text-blue-600"
                    : "bg-transparent border-2 border-white text-white"
                } px-8 py-4 rounded-xl font-bold shadow-lg w-full sm:w-auto transition-transform active:scale-95`}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Unit Detail Modal */}
      <AnimatePresence>
        {selectedUnit && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
            />

            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white w-full h-[90vh] md:h-auto md:max-h-[90vh] md:max-w-4xl overflow-y-auto rounded-t-[2.5rem] md:rounded-2xl shadow-2xl"
            >
              {/* Modal Sticky Header (Mobile Optimization) */}
              <div
                className={`${categoryColors[selectedUnit.category]} p-6 md:p-8 text-white relative sticky top-0 z-20`}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-colors z-30"
                >
                  <X size={20} />
                </button>

                <div className="relative">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-[10px] font-bold bg-white/20 px-3 py-1 rounded-full uppercase">
                      {selectedUnit.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold pr-10">
                    {selectedUnit.name}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-10 space-y-8">
                {/* Info Pills */}
                <div className="flex flex-wrap gap-3">
                  {selectedUnit.ageGroup && (
                    <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium">
                      <Users size={16} />
                      <span>{selectedUnit.ageGroup}</span>
                    </div>
                  )}
                  {selectedUnit.meetingTime && (
                    <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium">
                      <Clock size={16} />
                      <span>{selectedUnit.meetingTime}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    About This Unit
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {selectedUnit.fullDesc}
                  </p>
                </div>

                {/* Leadership Team - Responsive Grid */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    Unit Leadership
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Simplified Member Card Helper */}
                    {[
                      selectedUnit.leadership.leader,
                      selectedUnit.leadership.assistant,
                      selectedUnit.leadership.secretary,
                    ].map((member, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100"
                      >
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-top"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-300">
                              <Users className="text-white" />
                            </div>
                          )}
                        </div>
                        <h4 className="font-bold text-gray-800 text-sm">
                          {member.name}
                        </h4>
                        <p className="text-xs text-blue-600 font-medium mb-2">
                          {member.title}
                        </p>
                        <a
                          href={`mailto:${member.contact}`}
                          className="text-xs text-gray-500 flex items-center justify-center gap-1"
                        >
                          <Mail size={12} /> Contact
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                {selectedUnit.requirements && (
                  <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                    <h3 className="text-lg font-bold text-blue-900 mb-4">
                      Requirements to Join
                    </h3>
                    <ul className="space-y-3">
                      {selectedUnit.requirements.map((req, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-3 text-sm text-gray-700"
                        >
                          <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                            {index + 1}
                          </div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UnitsPage;
