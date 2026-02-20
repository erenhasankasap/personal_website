export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string; 
}

export const posts: BlogPost[] = [
  {
    slug: "gradient-descent-optimizasyonu",
    title: "Gradient Descent: Kayıp Fonksiyonunun Dibine İnmek",
    excerpt: "Yapay zeka modellerinin nasıl öğrendiğinin ardındaki matematiğe derinlemesine bir bakış.",
    date: "18 Şubat 2026",
    readTime: "5 dk okuma",
    category: "Matematik & Algoritma",
    content: `
### Neden Türev Kullanıyoruz?
Eğer bulunduğumuz noktanın eğimini bilirsek, yokuş aşağı nereye gitmemiz gerektiğini bulabiliriz. İşte **Gradient (Gradyan)** tam olarak budur.


* **Learning Rate (Öğrenme Oranı):** Attığımız adımların büyüklüğüdür.
* **Epoch:** Tüm verisetinin algoritmadan bir kez geçmesidir.



> "Optimizasyon, matematik ile bilgisayar bilimlerinin el sıkıştığı yerdir."
    `
  },
  {
    slug: "docker-ile-sistem-izolasyonu",
    title: "Docker Kullanarak Geliştirme Ortamını İzole Etmek",
    excerpt: "Sistem programcılığına giriş yaparken, projelerimizin 'benim bilgisayarımda çalışıyordu' sorunundan nasıl kurtarırız?",
    date: "10 Şubat 2026",
    readTime: "4 dk okuma",
    category: "Sistem Programlama",
    content: `### Docker Neden Önemli?
Sistem programcılığı hedefim doğrultusunda, uygulamaların her işletim sisteminde aynı şekilde çalışmasını sağlamak için Docker harika bir araçtır. 

Yakında buraya Beej's Guide üzerinden ağ programlama ve Docker network ayarları üzerine notlarımı ekleyeceğim.
    `
  },
  {
    slug: "nextjs-tailwind-mimarisi",
    title: "Modern Portföy Mimarisi: Next.js ve Tailwind v4",
    excerpt: "Server ve Client bileşenlerini ayırarak, Karanlık Mod destekli web sitesi inşa etmek.",
    date: "1 Şubat 2026",
    readTime: "7 dk okuma",
    category: "Web Geliştirme",
    content: `
### Bu Siteyi Nasıl Yaptım?
Bu projeyi geliştirirken Next.js'in App Router yapısını, CSS değişkenleriyle Dark Mode yapımını ve Masonry Layout (duvar örme) düzenini detaylıca uyguladım.
    `
  }
];
