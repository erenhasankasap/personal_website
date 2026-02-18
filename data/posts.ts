export interface BlogPost {
  slug: string; // URL'de görünecek kısım (orn: gradient-descent-nedir)
  title: string;
  excerpt: string; // Kısa özet
  date: string;
  readTime: string;
  category: string;
}

export const posts: BlogPost[] = [
  {
    slug: "gradient-descent-optimizasyonu",
    title: "Gradient Descent: Kayıp Fonksiyonunun Dibine İnmek",
    excerpt: "Yapay zeka modellerinin nasıl öğrendiğinin ardındaki matematiğe derinlemesine bir bakış. Türevler bize nasıl yol gösterir?",
    date: "18 Şubat 2026",
    readTime: "5 dk okuma",
    category: "Matematik & Algoritma"
  },
  {
    slug: "docker-ile-sistem-izolasyonu",
    title: "Docker Kullanarak Geliştirme Ortamını İzole Etmek",
    excerpt: "Sistem programcılığına giriş yaparken, projelerimizin 'benim bilgisayarımda çalışıyordu' sorunundan nasıl kurtarırız?",
    date: "10 Şubat 2026",
    readTime: "4 dk okuma",
    category: "Sistem Programlama"
  },
  {
    slug: "nextjs-tailwind-mimarisi",
    title: "Modern Portföy Mimarisi: Next.js ve Tailwind v4",
    excerpt: "Server ve Client bileşenlerini ayırarak, Karanlık Mod destekli ve yüksek performanslı bir kişisel web sitesi nasıl inşa edilir?",
    date: "1 Şubat 2026",
    readTime: "7 dk okuma",
    category: "Web Geliştirme"
  }
];
