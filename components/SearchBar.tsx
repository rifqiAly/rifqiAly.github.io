"use client";
import { Input, Button } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateSearchLocal(value.toLowerCase());
  };

  const updateSearchLocal = (keyw: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (keyw) {
      searchParams.set("search", keyw);
    } else {
      searchParams.delete("search");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <Input
          // label="Search"
          radius="full"
          variant="faded"
          placeholder="What are you looking for?"
          value={value}
          onValueChange={setValue}
        />
      </div>
      <Button type="submit" radius="full" variant="faded">
        <Image
          src={"/magnifying-glass.png"}
          alt="magnifying-glass"
          width={20}
          height={20}
        />
      </Button>
    </form>
  );
};

export default SearchBar;
