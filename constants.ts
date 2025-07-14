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
    title: 'Membangun Jaringan Internet di Desa Pangrumasan Saat Pandemi',
    excerpt: 'perjalanan saya membuat jaringan dari sebuah teflon katel, antena grid, dan tekad untuk tidak menyerah. Dari desa kecil yang dulu gelap sinyal, kini kami mulai menapaki jalan digital, sambil tetap menjaga akar budaya dan kebersamaan.Teknologi bukan hanya milik kota. Dengan niat dan gotong royong, desa pun bisa terkoneksi dengan dunia.',
    imageUrl: '/jaringansaya.jpg',
    fullContent: 'Pada awal pandemi COVID-19 tahun 2020, ketika seluruh dunia dipaksa beradaptasi dengan sistem daring, Desa Pangrumasan masih bergelut dengan satu masalah besar: tidak ada sinyal, apalagi internet.Sebagai seseorang yang menaruh minat besar pada jaringan dan teknologi, saya tidak tinggal diam. Perjuangan dimulai dari cara paling sederhana: mengikat HP ke antena grid yang dipasang di ujung bambu panjang, mencari celah sinyal di antara ladang dan kebun.Kami juga mencoba berbagai alternatif, termasuk menggunakan modem Orbit Telkomsel dengan dukungan antena eksternal. Kadang sinyal muncul, kadang hilang — tapi semangat untuk terkoneksi tidak pernah padam.Hingga akhirnya, solusi nyata datang: Starlink, layanan internet satelit dari SpaceX. Meski awalnya asing, saya beranikan diri memasangnya di desa. Dengan bantuan warga, menara sederhana, dan konfigurasi jaringan lokal, kami berhasil menyalurkan Wi-Fi ke beberapa titik penting.Dampak Nyata:Guru-guru bisa kembali mengajar secara daring.Siswa bisa mengikuti kelas online tanpa harus berjalan jauh mencari sinyal.Bidan desa dapat menerima laporan kesehatan via video call.Warga mulai mengenal marketplace, konten digital, dan peluang baru'
  },
  {
    id: 2,
    title: 'Pengalaman Membangun IoT Smart Garden',
    excerpt: 'Sebuah cerita pribadi tentang tantangan pembuatan iot smart garden',
    imageUrl: '/journal-iot-journey.jpg',
    fullContent: 'Proyek Smart Garden System ini saya kerjakan saat menyusun skripsi, sebagai solusi otomatisasi penyiraman tanaman berbasis IoT. Dengan memanfaatkan ESP32, sensor suhu, kelembapan, dan kelembapan tanah, sistem ini dapat memantau kondisi lingkungan dan mengaktifkan pompa air secara otomatis.Selain itu, saya juga membuat antarmuka HTML responsif agar pengguna bisa melihat data sensor dan mengontrol pompa secara manual. Proyek ini menjadi wujud ketertarikan saya pada pengembangan teknologi ramah lingkungan yang praktis dan efisien.'
  },
  {
    id: 3,
    title: 'Curug Batu Nyusun',
    excerpt: 'urug Batu Nyusun di Desa Pangrumasan, Garut, menyuguhkan keindahan air terjun alami dengan susunan batu unik dan suasana yang masih asri. Surga tersembunyi ini cocok untuk wisata alam dan refleksi diri, sekaligus menyimpan nilai budaya lokal.',
    imageUrl: '/batunyusun.jpg',
    fullContent: 'Curug Batu Nyusun terletak di Desa Pangrumasan, Kabupaten Garut. Air terjun ini memiliki formasi unik batu-batu besar yang tersusun alami, menciptakan pemandangan yang memesona.Suasana sekitar masih sangat asri, dikelilingi pepohonan dan suara alam yang menenangkan. Curug ini belum banyak dikenal, menjadikannya cocok untuk wisata alam dan refleksi diri.Selain keindahan alamnya, curug ini juga menyimpan cerita rakyat dan nilai budaya lokal. Potensi sebagai destinasi ekowisata sangat besar, asalkan dijaga bersama oleh masyarakat.'
  },
];