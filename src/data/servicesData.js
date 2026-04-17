export const servicesData = {
  headline: "Our Worship Experience",
  introText:
    "At Living Faith Church Sunnyvale, we believe that every service is an opportunity to meet with God and receive fresh grace for victorious living. Our services are filled with atmospheric shift worship that bring down the glory of God, deep teachings, and divine manifestations of God's power.",

  location: "Living Faith Church, Sunnyvale Estate, Dakwo, Abuja",
  // Weekly Services
  weeklyServices: [
    {
      id: "sunday",
      day: "Sunday",
      title: "Sunday Services",
      times: [
        { service: "first Service", time: "7:00 AM - 9:00 AM" },
        { service: "Second Service", time: "9:00 AM - 11:00 AM" },
      ],

      // UPDATE THIS MONTHLY - Change the theme for the next Sunday service
      currentTheme: "", // <-- Update this every week
      description:
        "Join us for our Sunday services, where we gather to worship God and receive His word. Each service is designed to uplift your spirit and empower you for the week ahead.",
      color: "from-red-400 to-blue-500",
      icon: "celebration",
      isRecurring: true,
    },

    {
      id: "wednesday",
      day: "Wednesday",
      title: "Midweek Communion Service",
      times: [
        { service: "Midweek Communion Service", time: "5:30 PM - 7:00 PM" },
      ],
      description: "Recharge your faith through the word and the communion",
      note: "Except the first Wednesday to Friday of every month(Spiritual week of emphases)",
      color: "from-purple-600 to-pink-600",
      icon: "communion",
      isReoccurring: true,
    },
    {
      id: "saturday",
      day: "Saturday",
      title: "Evangelism Outreach",
      times: [{ service: "Outreach", time: "8:00 AM - 10:00 AM" }],
      description:
        "Join us as we spread the gospel and make a difference in our community through evangelism outreach.",
      color: "from-green-600 to-teal-600",
      isReoccurring: true,
    },
    {
      id: "chop",
      day: "Monday - Friday",
      title: "covenant Hour of Prayer (CHOP)",
      times: [
        { service: "Weekday Morning Prayer", time: "6:00 AM - 7:00 AM" },
        { service: "Saturday Morning Prayer", time: "7:00 AM - 8:00 AM" },
      ],
      description:
        "Start your day with powerful intercession and seek God's face for divine direction, protection, and breakthrough",
      color: "from-orange-600 to-red-600",
      isReoccurring: true,
    },
  ],

  // Special Programs
  specialPrograms: [
    {
      id: "shiloh",
      title: " Shiloh 2025: Breaking New Ground",
      dates: "December 9-14, 2025",
      startDate: "2025-12-09",
      endDate: "2025-12-14",
      description:
        "Our annual prophetic gathering where we receive divine impartation, fresh mandates, and supernatural breakthroughs for the new year. Join thousands of believers for life-transforming encounters with God.",
      fullDescription:
        'Shiloh is our flagship annual program where heaven meets earth. Experience powerful worship, prophetic declarations, healing miracles, and destiny-shaping encounters. This year\'s theme "Breaking New Ground" positions you for unprecedented advancement in every area of your life.',
      color: "from-indigo-600 to-blue-400",
      icon: "special",
      isActive: true,
      highlights: [
        "Prophetic declarations and impartations",
        "Healing and miracles services",
        "Praise and worship nights",
      ],
    },

    {
      id: "fasting",
      title: "21 Days of Fasting & Prayer",
      dates: "Starts Second Monday of January (Annual)",
      // This will be calculated dynamically based on the current year
      startDate: "2025-01-12", // Second Monday of January 2026
      duration: "21 Days",
      description:
        "Begin each year with 21 days of consecration, prayer, and fasting to receive divine direction, spiritual renewal, and breakthrough for the year ahead.",
      fullDescription:
        "This corporate fast is a powerful way to start the year right. Through prayer, fasting, and the Word, we seek God's face for personal breakthroughs, family restoration, business success, and spiritual growth. Daily prayer points and teaching materials provided.",
      color: "from-purple-600 to indigo-600",
      icon: "fasting",
      isActive: true,
      highlights: [
        "Daily prayer pounts and teachings",
        "Morning and evening prayer sessions",
        "Spiritual growth and discipline",
        "Corporate breakthrough and testimonies",
      ],
    },
  ],

  // Monthly Programs (First week)
  monthlyPrograms: [
    {
      id: "spiritual-week",
      title: "Spiritual Week of Emphases",
      schedule: "First Wednesday to Friday of Every Month",
      time: "5:30 PM - 7:00 PM",
      description:
        "Three days of intensive spiritual renewal and communion service, focused teachings, and powerful encounters. This replaces the regular midweek communion service during the first week of each month.",
        color: 'from-teal-600 to-green-600',
        icon: 'renewal',
    },
  ],
};



// Helper function to calculate next 21 day fast start date
export const getNextFastingStartDate = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;

    // Find the second Monday of January next year
    const currentYearDate = getSecondMondayOfJanuary(currentYear);

    // if current date is past this year's fasting, return next year's date
    if (now > currentYearDate) {
        return getSecondMondayOfJanuary(nextYear);
    }

    return currentYearDate;
};


// Helper function to find second Monday of January for a given year
const getSecondMondayOfJanuary = (year) => {
    let date = new Date(year, 0, 1); // January 1st
    let mondayCount = 0;

    while (mondayCount < 2) {
        if (date.getDay() === 1) { // Monday 
            mondayCount++
        }
        if (mondayCount < 2) {
            date.setDate(date.getDate() + 1)
        }
    }

    return date;
};


// helper function to format date
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        Weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
};

export default servicesData;
