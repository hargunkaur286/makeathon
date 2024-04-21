import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";

import Features from "@/components/Features";
import Navigation from "@/components/navigation";
import Card from "@/components/Card";
import Flipcard from "@/components/FlipCard";

export default function Home() {
  return (
    <main >
      
      <Hero/>
      <About/>
      <Features/>
      <Card/>
      <Flipcard/>
    </main>
  );
}
