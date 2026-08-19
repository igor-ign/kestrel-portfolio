import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <section id="about" className="w-full" />
      <section id="portfolio" className="w-full" />
      <section id="contact" className="w-full" />
    </main>
  );
}
