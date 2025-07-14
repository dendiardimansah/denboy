import type { NavLink, Project, Post } from './types';
import { PlantIcon, FeederIcon, GearIcon } from './components/Icons';

export const NAV_LINKS: NavLink[] = [
  { name: 'Projects', href: '#projects' },
  { name: 'Journal', href: '#journal' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Smart Garden System',
    description: 'An IoT solution that automates watering and monitors soil health for optimal plant growth.',
    Icon: PlantIcon,
    detailImageUrl: '/project-smart-garden.jpg',
    longDescription: 'The Smart Garden System is a comprehensive IoT solution designed for modern home gardeners. It utilizes sensors to monitor soil moisture, humidity, and ambient temperature in real-time. Based on this data, an automated irrigation system provides the perfect amount of water, preventing over or under-watering. A companion mobile app allows users to view historical data, set custom watering schedules, and receive alerts, ensuring their plants thrive with minimal effort.',
    techStack: ['ESP32', 'React Native', 'Firebase', 'PlatformIO', 'Node.js'],
    liveUrl: '/smart-garden.html',
    sourceUrl: 'https://github.com/dendiardimansah',
  },
  {
    id: 2,
    title: 'Automated Pet Feeder',
    description: 'A smart feeder that dispenses food on a schedule, controllable via a mobile app.',
    Icon: FeederIcon,
    detailImageUrl: '/project-pet-feeder.jpg',
    longDescription: 'This Automated Pet Feeder ensures that your beloved pets are fed on time, every time, even when you\'re not home. The device can be programmed to dispense specific portions of food at scheduled intervals through a user-friendly mobile application. It also includes a built-in webcam, allowing pet owners to check in on their furry friends during meal times. The system sends notifications upon successful feeding, providing peace of mind.',
    techStack: ['Raspberry Pi', 'Python (Flask)', 'React', 'MongoDB', 'AWS S3'],
    sourceUrl: 'Automated-Pet-Feeder.html',
  },
  {
    id: 3,
    title: 'Home Energy Monitor',
    description: 'A web app visualizing real-time energy consumption to help reduce carbon footprint.',
    Icon: GearIcon,
    detailImageUrl: '/project-energy-monitor.jpg',
    longDescription: 'The Home Energy Monitor is a non-invasive device that clamps onto your home\'s main power line to measure real-time electricity usage. The data is sent to a cloud server and visualized on a responsive web dashboard. Users can track their consumption patterns, identify energy-hungry appliances, and set budgets to reduce their electricity bills and environmental impact. The system also provides weekly reports and actionable tips for energy saving.',
    techStack: ['Next.js', 'Chart.js', 'PostgreSQL', 'Vercel', 'Arduino'],
    liveUrl: '#',
  },
];

export const POSTS: Post[] = [
  {
    id: 1,
    title: 'Building an Internet Network in Pangrumasan Village During the Pandemic',
    excerpt: "My journey began with a kettle lid, a grid antenna, and sheer determination. From a small village once left in the dark with no signal, we began paving our way into the digital world—while still holding tight to our cultural roots and community spirit. Technology is not just for cities. With strong will and collaboration, even remote villages can connect to the world.",
    imageUrl: '/jaringansaya.jpg',
    fullContent: "In early 2020, during the COVID-19 pandemic, when the world was forced to adapt to online systems, Pangrumasan Village faced a major obstacle: no mobile signal, let alone internet. As someone passionate about networking and technology, I couldn't just stand by. I began with the simplest method—tying a mobile phone to a grid antenna at the end of a long bamboo pole, searching for signal gaps between the fields and gardens. We tried many alternatives, including using a Telkomsel Orbit modem with external antenna support. Sometimes the signal came, sometimes it disappeared—but our desire to connect never faded. Eventually, a real solution arrived: Starlink, the satellite internet service by SpaceX. Though unfamiliar at first, I dared to install it in our village. With help from the locals, a simple tower, and a local network setup, we managed to distribute Wi-Fi to several key points.Real Impact:Teachers were able to teach online again.Students could join classes without walking far to find a signal. he village midwife could receive health reports via video call.Residents started discovering digital marketplaces, content, and new opportunities."
  },
  {
    id: 2,
    title: 'My Experience Building an IoT Smart Garden',
    excerpt: 'A personal story about the challenges of building an IoT smart garden.',
    imageUrl: '/journal-iot-journey.jpg',
    fullContent: "I developed the Smart Garden System as part of my thesis project, aiming to automate plant watering using IoT. With the help of an ESP32, temperature and humidity sensors, and a soil moisture sensor, the system monitors environmental conditions and automatically activates a water pump when needed. I also built a responsive HTML interface to allow users to monitor sensor data and control the pump manually. This project reflects my passion for creating environmentally friendly technologies that are both practical and efficient."
  },
  {
    id: 3,
    title: 'Curug Batu Nyusun',
    excerpt: 'Curug Batu Nyusun, located in Pangrumasan Village, Garut, showcases a beautiful natural waterfall with unique stone formations and a serene atmosphere. A hidden paradise perfect for nature tourism and self-reflection, while preserving local cultural values.',
    imageUrl: '/batunyusun.jpg',
    fullContent: "Curug Batu Nyusun is located in Pangrumasan Village, Garut Regency. This waterfall features naturally arranged large stone formations that create a stunning view.The surrounding area remains untouched, surrounded by lush trees and calming sounds of nature. As a relatively unknown spot, it’s ideal for nature lovers and peaceful reflection. Beyond its scenic beauty, this waterfall also holds local folklore and cultural significance. It has great potential to become an ecotourism destination—provided it is preserved by the local community."
  }
];

];