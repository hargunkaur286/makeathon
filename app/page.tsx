import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";

import Features from "@/components/Features";
import Card from "@/components/Card";

import Projects from "@/components/Projects";
import Flipcard from "@/components/FlipCard";
import Navbar from "@/components/Navbar";
import About2 from "@/components/About2";
import MultipleChoiceForm from "@/components/MultipleChoiceForm";

export default function Home() {
  return (
    <main >
      <Hero/>
      <About/>
      <Features/>
      <Card/>
    </main>
  );
}
