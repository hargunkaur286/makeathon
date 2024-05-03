import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";

import Features from "@/components/Features";
import Card from "@/components/Card";

import Projects from "@/components/Projects";
import Flipcard from "@/components/FlipCard";
import Navbar from "@/components/Navbar";
import About2 from "@/components/About2";

import img1 from '../assets/img1.png'

const imageItems=[
  <Image className="h-full w-full" src={img1} alt="card1" />,
  <Image className="h-full w-full" src={img1} alt="card1" />,
  <Image className="h-full w-full" src={img1} alt="card1" />,
  <Image className="h-full w-full" src={img1} alt="card1" />,
]
export default function Home() {
  return (
    <main >
      <Hero/>
      <About/>
      <Features/>
      <About2/>
      <Flipcard/>
      <Card/>
    </main>
  );
}
