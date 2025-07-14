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
    detailImageUrl: '/assets/project-smart-garden.jpg',
    longDescription: 'The Smart Garden System is a comprehensive IoT solution designed for modern home gardeners. It utilizes sensors to monitor soil moisture, humidity, and ambient temperature in real-time. Based on this data, an automated irrigation system provides the perfect amount of water, preventing over or under-watering. A companion mobile app allows users to view historical data, set custom watering schedules, and receive alerts, ensuring their plants thrive with minimal effort.',
    techStack: ['ESP32', 'React Native', 'Firebase', 'PlatformIO', 'Node.js'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 2,
    title: 'Automated Pet Feeder',
    description: 'A smart feeder that dispenses food on a schedule, controllable via a mobile app.',
    Icon: FeederIcon,
    detailImageUrl: '/assets/project-pet-feeder.jpg',
    longDescription: 'This Automated Pet Feeder ensures that your beloved pets are fed on time, every time, even when you\'re not home. The device can be programmed to dispense specific portions of food at scheduled intervals through a user-friendly mobile application. It also includes a built-in webcam, allowing pet owners to check in on their furry friends during meal times. The system sends notifications upon successful feeding, providing peace of mind.',
    techStack: ['Raspberry Pi', 'Python (Flask)', 'React', 'MongoDB', 'AWS S3'],
    sourceUrl: '#',
  },
  {
    id: 3,
    title: 'Home Energy Monitor',
    description: 'A web app visualizing real-time energy consumption to help reduce carbon footprint.',
    Icon: GearIcon,
    detailImageUrl: '/assets/project-energy-monitor.jpg',
    longDescription: 'The Home Energy Monitor is a non-invasive device that clamps onto your home\'s main power line to measure real-time electricity usage. The data is sent to a cloud server and visualized on a responsive web dashboard. Users can track their consumption patterns, identify energy-hungry appliances, and set budgets to reduce their electricity bills and environmental impact. The system also provides weekly reports and actionable tips for energy saving.',
    techStack: ['Next.js', 'Chart.js', 'PostgreSQL', 'Vercel', 'Arduino'],
    liveUrl: '#',
  },
];

export const POSTS: Post[] = [
  {
    id: 1,
    title: 'The Future of Sustainable Tech',
    excerpt: 'Exploring how green technology can help us build a more sustainable future without compromising on innovation.',
    imageUrl: '/assets/journal-sustainable-tech.jpg',
    fullContent: 'Green technology, or cleantech, is the application of environmental science to conserve the natural environment and resources, and to curb the negative impacts of human involvement. In recent years, the focus has shifted from merely reducing harm to actively creating positive environmental outcomes. This includes innovations in renewable energy like solar and wind power, but also extends to software and IoT. For example, smart grids can optimize energy distribution, reducing waste significantly. AI algorithms can predict environmental changes, helping us to prepare and mitigate disasters. The journey is long, but every step towards integrating sustainability into our technological DNA is a step towards a healthier planet.'
  },
  {
    id: 2,
    title: 'My Journey into IoT Development',
    excerpt: 'A personal story about the challenges and triumphs of creating my first connected device from scratch.',
    imageUrl: '/assets/journal-iot-journey.jpg',
    fullContent: 'My first foray into the Internet of Things was a humble, yet ambitious project: a plant that could "ask" for water. It started with a simple Arduino, a soil moisture sensor, and a lot of tangled wires. The first challenge was simply getting a reliable reading from the sensor. After days of debugging and calibrating, I finally got it to work. Then came the "internet" part. Connecting the device to my Wi-Fi and sending that data to a server was another mountain to climb. I wrestled with HTTP requests, JSON formatting, and setting up a basic backend. The moment I received the first "I\'m thirsty!" notification on my phone was pure magic. It was a powerful reminder that with persistence, you can bring an idea, no matter how small, to life and connect it to the world.'
  },
  {
    id: 3,
    title: 'Designing for Low-Energy Web',
    excerpt: 'Practical tips and principles for creating websites that are not only fast but also environmentally friendly.',
    imageUrl: '/assets/journal-low-energy-web.jpg',
    fullContent: 'Every byte of data transferred over the internet consumes energy. As web developers, we can make conscious choices to reduce the digital carbon footprint of our creations. The first step is optimizing assets: compress images, use modern formats like WebP, and lazy-load offscreen content. Secondly, minimize code. Use efficient, tree-shakeable libraries and avoid bloated frameworks for simple tasks. Thirdly, consider static site generation. Serving pre-built HTML files is significantly less server-intensive than running a complex backend for every page view. Finally, embrace dark mode. On OLED screens, dark pixels are turned off, which can lead to tangible energy savings. By adopting these principles, we can build a faster, more accessible, and greener web for everyone.'
  },
];