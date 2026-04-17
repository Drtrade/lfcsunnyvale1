import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, Calendar, Users, Info, Mail, Search, Bell, Menu, X, Clock,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext";

const Navbar = () => {
  const {
    showMobileMenu,
    setShowMobileMenu,
    currentTime,
    setSearchQuery,
    notificationEnabled,
    setNotificationEnabled,
  } = useApp();

  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);

  const navItems = [
    { path: "/",        label: "Home",     icon: Home     },
    { path: "/services",label: "Services", icon: Calendar },
    { path: "/units",   label: "Units",    icon: Users    },
    { path: "/about",   label: "About",    icon: Info     },
    { path: "/contact", label: "Contact",  icon: Mail     },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const formatDateTime = (date) => {
    return date.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const enableNotifications = () => {
    setNotificationEnabled(true);
    alert("Push notification enabled! You'll receive service reminders");
  };

  const activeClass = "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm";
  const inactiveClass = "text-gray-700 hover:bg-gray-100";

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">

          {/* Logo — Link to Home */}
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                <span className="text-white font-bold text-lg md:text-xl">LFC</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-base md:text-xl font-bold text-gray-800 leading-none">LFC Sunnyvale</h1>
                <p className="text-[10px] md:text-xs text-gray-500">Living Faith Church</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                    isActive(item.path) ? activeClass : inactiveClass
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-1 md:space-x-4">
            {/* Date & Time (Desktop Only) */}
            <div className="hidden xl:flex items-center space-x-2 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
              <Clock size={16} />
              <span className="font-medium">{formatDateTime(currentTime)}</span>
            </div>

            {/* Search */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-gray-700" />
            </button>

            {/* Notification Bell */}
            <button
              onClick={enableNotifications}
              className={`p-2 rounded-lg transition-colors ${
                notificationEnabled ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <Bell size={20} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors ml-1"
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="pb-4"
            >
              <input
                type="text"
                autoFocus
                placeholder="Search sermons, blogs, events..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 text-sm md:text-base border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none shadow-inner"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white shadow-xl overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setShowMobileMenu(false)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                    isActive(item.path) ? activeClass : "text-gray-700 hover:bg-gray-50 active:bg-gray-100"
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium text-base">{item.label}</span>
                </Link>
              ))}

              {/* Mobile Date/Time */}
              <div className="flex items-center space-x-2 text-xs text-gray-500 bg-gray-50 px-4 py-3 rounded-lg mt-3 border border-gray-100">
                <Clock size={14} />
                <span className="font-medium">{formatDateTime(currentTime)}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;