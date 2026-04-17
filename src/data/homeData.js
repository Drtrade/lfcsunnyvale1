import church from '../assets/hero/auditorium.jpg';

const homeData = {
  hero: {
    title: "Welcome to Living Faith Church Sunnyvale",
    subtitle: "A place where faith comes alive, families are strengthened, and destinies are fulfilled",
    buttonText: "Join Our Next Service",
    // Link your altar image here. 
    // If it's in your assets folder, use: backgroundImage: "/assets/church-altar.jpg"
    backgroundImage: church , 
  },


  intro: {
    title: "Welcome to Living Faith Church, Sunnyvale Branch",
    description:
      "A home of faith, joy, and transformation. We are a vibrant community of believers passionately pursuing God's presence and power through heartfelt worship, sound teaching, and love for one another. Whether you are new to Sunnyvale or just discovering Winners' Chapel, you're warmly welcome to experience the life-changing Word that works!",
  },

  location: "Living Faith Church, Sunnyvale Estate, Dakwo, Abuja",

  weeklyServices: [
    {
      title: "Sunday Services",
      times: ["1st Service: 7:00 AM - 9:00 AM", "2nd Service: 9:00 AM - 11:00 AM"],
      colorBorder: "border-blue-100",
      colorBg: "bg-blue-100",
      colorIcon: "text-blue-600",
    },
    {
      title: "Midweek Communion",
      times: ["Every Wednesday 5:30 PM - 7:00 PM"],
      colorBorder: "border-purple-100",
      colorBg: "bg-purple-100",
      colorIcon: "text-purple-600",
    },
    {
      title: "Covenant Hour of Prayer (CHOP)",
      times: ["Mon-Fri: 6:00 AM", "Sat: 7:00 AM"],
      colorBorder: "border-orange-100",
      colorBg: "bg-orange-100",
      colorIcon: "text-orange-600",
    },
  ],

  about: {
    title: "About Our Church",
    description:
      "Living Faith Church Sunnyvale is a vibrant community of believers committed to spreading the gospel of Jesus Christ and transforming lives through faith, love, and service.",
    buttonText: "Learn More About Us",
    stats: [
      { val: "15+",  label: "Years",      color: "text-blue-600"   },
      { val: "2000+",label: "Members",    color: "text-purple-600" },
      { val: "50+",  label: "Ministries", color: "text-green-600"  },
      { val: "100+", label: "Programs",   color: "text-orange-600" },
    ],
  },

  mandate: {
    quote: "The hour has come to liberate the world from all oppression of the devil...",
    author: "Bishop David Oyedepo",
  },

  whatToExpect: {
    title: "What to Expect",
    description:
      "At Living Faith Church Sunnyvale, you'll find passionate worship, insightful Word teachings, and warm fellowship.",
  },

  testimonies: [
    {
      name: "Sarah Johnson",
      testimony:
        "God miraculously healed my daughter from a chronic illness that doctors said was incurable. Today, she's completely healthy and thriving!",
      role: "Member since 2020",
      image: "from-pink-400 to-rose-500",
    },
    {
      name: "Michael Adebayo",
      testimony:
        "I was facing bankruptcy, but through the teachings and prayers in this church, God turned my situation around. My business is now flourishing!",
      role: "Member since 2018",
      image: "from-blue-400 to-indigo-500",
    },
    {
      name: "Grace Okafor",
      testimony:
        "After 10 years of waiting, God blessed me with the fruit of the womb. My testimony is a living miracle, and I'm forever grateful!",
      role: "Member since 2015",
      image: "from-purple-400 to-pink-500",
    },
  ],
};

export default homeData;