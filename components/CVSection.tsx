export default function CVSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20" id="cv-section">
      <div className="flex flex-col items-center">
        
        {/* Başlık */}
        <h2 className="text-3xl font-bold text-primary mb-8">
          Özgeçmiş / CV
        </h2>

        {/* PDF Çerçevesi */}
        <div className="w-full h-[800px] bg-white rounded-xl shadow-lg overflow-hidden border border-surface">
          <iframe 
            src="/cv.pdf" 
            className="w-full h-full" 
            title="Eren Hasan Kasap CV"
          />
        </div>

        {/* Alternatif İndirme Butonu (Mobil uyumluluk için şart) */}
        <div className="mt-6">
          <a 
            href="/cv.pdf" 
            download
            className="text-accent font-medium hover:underline flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            PDF Olarak İndir
          </a>
        </div>

      </div>
    </section>
  );
}
