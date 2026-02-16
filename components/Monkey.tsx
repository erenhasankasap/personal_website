import React from 'react';

export default function Monkey() {
  return(
  <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">

    <span className="text-accent font-medium tracking-widest uppercase mb-4">
    Matematik Mühendisi
    </span>

    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-primary">
        Eren Hasan KASAP
    </h1>
    
    <p className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed mb-10">
        Veri odaklı çözümler, algoritmik düşünce yapısı ve modern web teknolojilerini birleştirerek dijital ürünler tasarlıyorum.
    </p>

    <div className="flex gap-4">
        <button className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all">
          Projelerimi Gör
        </button>
        <button className="px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-surface transition-all">
          İletişime Geç
        </button>
    </div>
  </section>
  );
  
}
