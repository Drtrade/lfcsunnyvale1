import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, X } from "lucide-react";
import { useApp } from "../context/AppContext";
import { bibleVerses } from "../data/bibleVerses";

const WelcomePopup = () => {
  const { showPopup, setShowPopup, getServiceMessage } = useApp();

  // Select a random Bible verse when popup loads
  const [verse] = useState(
    () => bibleVerses[Math.floor(Math.random() * bibleVerses.length)]
  );

  if (!showPopup) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 sm:p-6"
        onClick={() => setShowPopup(false)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          // Added max-h-full and overflow-y-auto for small screens
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
          >
            <X size={24} />
          </button>
          
          {/* Header */}
          <div className="text-center mb-4 md:mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              // Reduced icon size for mobile
              className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <BookOpen className="text-white" size={32} md:size={40} />
            </motion.div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
              Welcome to LFC Sunnyvale!
            </h2>
          </div>

          {/* Bible Verse - Scrollable if text is long */}
          <div className="bg-white rounded-xl p-4 md:p-6 mb-4 md:mb-6 shadow-md border border-blue-50">
            <p className="text-gray-700 italic text-base md:text-lg mb-3 leading-relaxed">
              "{verse.text}"
            </p>
            <p className="text-blue-600 font-semibold text-right text-sm md:text-base">
              - {verse.ref}
            </p>
          </div>

          {/* Service Message */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white text-center shadow-lg">
            <Calendar className="inline-block mb-1 md:mb-2" size={20} md:size={24} />
            <p className="font-semibold text-sm md:text-lg leading-tight">
              {getServiceMessage()}
            </p>
          </div>

          {/* Continue Button */}
          <button
            onClick={() => setShowPopup(false)}
            className="mt-6 w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 md:py-4 rounded-lg transition-colors shadow-md active:scale-[0.98]"
          >
            Continue to Website
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomePopup;