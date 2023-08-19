import Accommodations from '@/components/Accommodations';
import Accommodations2 from '@/components/Accommodations2';
import FamilySuite from '@/components/FamilySuite';
import Hero from '@/components/Hero';
import InThePress from '@/components/InThePress';
import TwoPictures from '@/components/TwoPictures';
import Welcome from '@/components/Welcome';
import { aa, a1, a2, a3, bb, cc, b1, b2, b3 } from '@/public';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className='overflow-x-hidden font-playfair'>
        <Hero />
        <Welcome />
        <Accommodations />
        <FamilySuite />
        <TwoPictures />
        <Accommodations2 />
        <InThePress />
      </section>
    </main>
  )
}