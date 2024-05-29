import { Hero, Section } from "@/components";
import utils from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default async function Home({searchParams}) {
  // const data = await utils.getEmailed('1');
  let data = utils.demoData(searchParams.search);
  const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;

  return (
    <main className="overflow-hidden">
      <Hero />

      <Section data={data} isDataEmpty={isDataEmpty} />
    </main>
  );
}
