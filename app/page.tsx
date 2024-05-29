"use client";
import { Hero, Section } from "@/components";
import utils from "@/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  //search States
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [period, setPeriod] = useState("");

  const getDatas = async () => {
    try {
      const res = await utils.getData({
        search: search,
        type: type,
        period: period,
      });
      
      setData(res)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDatas();
  }, [search, type, period]);

  // let data: any = await utils.getData(searchParams);
  const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;

  return (
    <main className="overflow-hidden">
      <Hero />

      <Section
        data={data}
        isDataEmpty={data?.length > 1 ? false : true}
        searchSet={setSearch}
        typeSet={setType}
        periodSet={setPeriod}
      />
    </main>
  );
}
