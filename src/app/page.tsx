import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Process } from '@/components/Process';
import { Services } from '@/components/Services';
import { Work } from '@/components/Work';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <Process />
      <Work />
      <About />
      <section id="portfolio" className="w-full" />
      <Contact />
    </main>
  );
}
