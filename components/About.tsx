import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="bg-gray-50 dark:bg-dark-bg/50">
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2">
          <img src="/about-dendi.jpg" alt="Dendi Ardimansah at work" className="rounded-2xl shadow-2xl w-full" />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-4xl font-bold text-light-text dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
             Halo! Saya <strong>Dendi Ardimansah</strong>, seorang Network Engineer yang berasal dari <strong>Desa Pangrumasan, Garut</strong>. Saya memiliki ketertarikan besar dalam dunia teknologi, khususnya dalam bidang jaringan dan pengembangan proyek-proyek <strong>IoT (Internet of Things)</strong> yang bermanfaat langsung bagi kehidupan masyarakat desa.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Selain bekerja di bidang teknis, saya membagikan jurnal mengenai <strong>teknologi, budaya Sunda, musik, serta potensi desa</strong>. Bagi saya, teknologi bukan hanya soal mesin dan kabel, tapi juga bagaimana kita bisa menjaga nilai-nilai lokal sembari bergerak maju secara digital.
          </p>
          <a href="#contact" className="font-semibold text-primary dark:text-primary-dark hover:underline text-lg">
            Melalui karya dan tulisan, saya ingin menjadi jembatan antara <strong>kemajuan teknologi dan kearifan lokal</strong>. Ayo kita berkolaborasi dan bangun masa depan desa yang cerdas, mandiri, dan tetap berbudaya. &rarr;
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;