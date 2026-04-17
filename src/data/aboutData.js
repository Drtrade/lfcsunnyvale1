// About Page Data - Centralized content management
import asstResPastor from '../assets/pastors/AsstRestPastor.jpg';
import resPastor from '../assets/pastors/ResPastor.jpeg';

export const aboutData = {
  headline: "Who We Are",
  
  introText: "Living Faith Church Sunnyvale is a branch of the Living Faith Church Worldwide, also known as Winners Chapel International, founded by Bishop David Oyedepo. We are a faith-based community driven by the liberation mandate — to preach the Word of Faith and set men free from all oppression of the devil.",

  vision: {
    title: "Our Vision",
    statement: "To preach the Word of Faith and liberate the world from every oppression of the devil.",
    icon: "target"
  },

  mission: {
    title: "Our Mission",
    statement: "To bring people into a growing relationship with Jesus Christ through the teaching of the Word, fervent prayer, passionate worship, and service to humanity.",
    icon: "compass"
  },

  coreValues: {
    title: "Our Core Values",
    values: [
      {
        name: "Faith",
        description: "Living by the Word of God daily.",
        icon: "book"
      },
      {
        name: "Love",
        description: "Expressing God's heart to everyone.",
        icon: "heart"
      },
      {
        name: "Service",
        description: "Advancing the Kingdom through stewardship.",
        icon: "hands"
      },
      {
        name: "Excellence",
        description: "Representing Christ in all we do.",
        icon: "star"
      },
      {
        name: "Integrity",
        description: "Living truthfully and honorably.",
        icon: "shield"
      }
    ]
  },

  leadership: {
    title: "Our Leadership",
    residentPastor: {
      name: "Pastor Bola Vaughan",
      title: "Resident Pastor",
      description: "A dynamic preacher of the Word with a passion for transforming lives through biblical revelation and the power of faith.",
      image: resPastor, 
      email: "livingfaithchurchsunnyvale@gmail.com"
    },
    assistantPastor: {
      name: "Pastor Gabriel Emmanuel ", // UPDATE THIS with actual pastor name
      title: "Assistant Resident Pastor",
      description: "A dynamic preacher of the Word with a passion for transforming lives through biblical revelation and the power of faith.",
      image: asstResPastor, // Add actual image path
      email: "livingfaithchurchsunnyvale@gmail.com"
    },
   
  },

  story: {
    title: "Our Story",
    content: "Since its establishment in Sunnyvale, the branch has grown into a vibrant church family impacting hundreds of lives weekly through teaching, worship, outreach, and discipleship. We continue to expand our reach as a beacon of hope, healing, and transformation in our community.",
    milestones: [
      {
        year: "2010",
        title: "Church Established",
        description: "LFC Sunnyvale was founded as a beacon of hope"
      },
      {
        year: "2015",
        title: "New Sanctuary",
        description: "Expanded to accommodate growing congregation"
      },
      {
        year: "2020",
        title: "500+ Members",
        description: "Reached a milestone of over 500 active members"
      },
      {
        year: "2025",
        title: "Continued Growth",
        description: "Impacting thousands through various ministries"
      }
    ]
  },

  stats: [
    { number: "10+", label: "Years of Ministry" },
    { number: "3000+", label: "Members" },
    { number: "15+", label: "Active Units" },
    { number: "5+", label: "Weekly Programs" }
  ]
};

export default aboutData;