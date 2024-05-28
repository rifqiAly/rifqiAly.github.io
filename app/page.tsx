import { Hero, Section } from "@/components";
import utils from "@/utils";
import Image from "next/image";
import { useState } from "react";

export default async function Home() {
  // const data = await utils.getEmailed('1');
  const data = utils.demoData()
  const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;

  return (
    <main className="overflow-hidden">
      <Hero />

      <Section data={data} isDataEmpty={isDataEmpty} />
    </main>
  );
}
