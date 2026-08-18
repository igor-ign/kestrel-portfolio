import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <section id="about" className="w-full" />
      <section id="services" className="w-full" />
      <section id="portfolio" className="w-full" />
      <section id="contact" className="w-full" />
    </main>
  );
}
