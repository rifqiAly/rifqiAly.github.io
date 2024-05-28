import { Hero, Section } from "@/components";
import utils from "@/utils";
import Image from "next/image";
import { useState } from "react";


export default async function Home() {
  const data = await utils.getEmailed('1')
  const allArticles = data.results

  return (
    <main className="overflow-hidden">
      <Hero />

      <Section />


    </main>
  );
}
