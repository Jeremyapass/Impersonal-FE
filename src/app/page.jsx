"use client";
import Headline from "@/components/Organism/content/headline";
import Hero from "@/components/Organism/content/hero";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col">
      <Headline />
      <Hero />
    </main>
  );
}
