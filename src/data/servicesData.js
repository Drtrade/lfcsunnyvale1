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
      id: "liberation-night",
      title: "45th Anniversary Liberation Night",
      dates: "May 1 - May 2, 2026",
      startDate: "2026-05-01",
      duration: "2 Days",
      description:
        "The 45th anniversary celebration of the Liberation Mandate delivered to Bishop David Oyedepo on May 2, 1981.",
      fullDescription:
        "Liberation Night 2026 marks 45 years since the Lord declared, 'The hour has come to liberate the world from all oppressions of the devil.' This service is a divine re-enactment of the mandate, characterized by massive thanksgiving, celebration praise, and the release of prophetic blessings to move the congregation into new levels of freedom and power.",
      color: "from-purple-800 to-blue-900",
      icon: "liberation",
      isActive: false,
      highlights: [
        "45 Years of Undeniable Proofs and Impact",
        "Global Anniversary Celebration Praise",
        "Re-validation of the Liberation Mandate",
        "Prophetic Blessings for the Next Level of Dominion",
      ],
    },
    {
      id: "int-ministers-conference",
      title: "International Ministers Conference 2026",
      dates: "May 12 - May 16, 2026 (Annual)",
      startDate: "2026-05-12",
      duration: "5 Days",
      description:
        "A specialized global convocation for church leaders and workers to receive fresh oil and apostolic instructions for ministerial excellence.",
      fullDescription:
        "The 2026 International Ministers Conference (IMC) is a mountain of transformation for those called into ministry. Held at Faith Tabernacle, Canaanland, this conference focuses on the 'Open Doors' mandate, equipping ministers with the supernatural wisdom and spiritual fire needed to navigate the demands of leadership in the end-time. It features intensive plenary sessions with Bishop David Oyedepo and other anointed leaders, focused breakout sessions on church growth, and prophetic impartation for global impact.",
      color: "from-blue-900 to-yellow-800",
      icon: "ministers",
      isActive: false,
      highlights: [
        "Apostolic Impartation for Church Growth",
        "Specialized Ministerial Leadership Workshops",
        "Deep Word Encounters for End-time Ministry",
        "Global Networking with Leaders from 150+ Nations",
      ],
    },
    {
      id: "ayac",
      title: "Annual Youth Alive Convention (AYAC) 2026",
      dates: "August 18 - August 22, 2026 (Annual)",
      startDate: "2026-08-18",
      duration: "5 Days",
      description:
        "A high-octane global gathering at Faith Tabernacle, Canaanland, designed to ignite a spiritual fire and empower the youth for global impact.",
      fullDescription:
        "The Annual Youth Alive Convention is the 'Isle of Patmos' for the modern youth. It is a consecrated mountain of high-level spiritual instructions, apostolic impartation, and specialized workshops. In 2026, the convention focuses on raising a generation of youths who are alive in spirit, soul, and body—equipping them to break new grounds and fulfill their divine purpose on earth through the Word and the power of the Holy Spirit.",
      color: "from-blue-600 to-red-600",
      icon: "youth",
      isActive: false,
      highlights: [
        "Apostolic Impartation for Global Dominance",
        "Strategic Career and Business Empowerment Sessions",
        "Morning and Evening Prophetic Word Encounters",
        "Specialized Workshops on Leadership and Impact",
      ],
    },
    {
      id: "shiloh",
      title: " Shiloh 2026: Breaking New Ground",
      dates: "December 8-13, 2026",
      startDate: "2026-12-08",
      endDate: "2026-12-13",
      description:
        "Our annual prophetic gathering where we receive divine impartation, fresh mandates, and supernatural breakthroughs for the new year. Join thousands of believers for life-transforming encounters with God.",
      fullDescription:
        'Shiloh is our flagship annual program where heaven meets earth. Experience powerful worship, prophetic declarations, healing miracles, and destiny-shaping encounters. This year\'s theme "Breaking New Ground" positions you for unprecedented advancement in every area of your life.',
      color: "from-blue-800 to-purple-700",
      icon: "special",
      isActive: false, // Set to true when the event is active
      highlights: [
        "Prophetic declarations and impartations",
        "Healing and miracles services",
        "Praise and worship nights",
      ],
    },
    {
      id: "easter-2026",
      title: "Easter Faith Convention 2026: (Wings of Faith)",
      dates: "April 2 - April 6, 2026 (Annual)",
      // Starting on the Thursday (Passion Week) through Easter Monday
      startDate: "2026-04-02",
      duration: "5 Days",
      description:
        "A global celebration of the resurrection power of Christ, specifically themed to launch every believer into new realms of glory on the Wings of Faith.",
      fullDescription:
        "Join the worldwide Winners' family for the 2026 Easter Faith Convention. This is a season of supernatural liberation where we celebrate the triumph of Christ over death and the grave. Under the theme 'Wings of Faith,' these services are designed to activate the prophetic mandate of liberation in the lives of all members, featuring high-praise celebrations, the Communion of Life, and specialized prophetic ministrations.",
      color: "from-red-700 to-blue-800",
      icon: "easter",
      isActive: false, // Set to true when the event is active
      highlights: [
        "Easter Sunday Resurrection Celebration",
        "Special Covenant Day of Trumpet Service",
        "Communion of Life and Liberation Ministrations",
        "Prophetic Encounters for Family Breakthrough",
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
      color: "from-purple-700 to-red-600",
      icon: "fasting",
      isActive: false, // Set to true when the fasting period is active
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
      color: "from-teal-600 to-green-600",
      icon: "renewal",
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
    if (date.getDay() === 1) {
      // Monday
      mondayCount++;
    }
    if (mondayCount < 2) {
      date.setDate(date.getDate() + 1);
    }
  }

  return date;
};

// helper function to format date
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    Weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default servicesData;
