"use client";
import { anyProps } from "@/types";
import { useState } from "react";
import Image from "next/image";
import utils from "@/utils";
import CustomButton from "./CustomButton";

const ArtiCard = ({ data }: anyProps) => {
  // const picArr = data.media[0]["media-metadata"];
  // const pic = picArr[picArr.length - 1].url;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="arti-card group">
      <div className="arti-card__content">
        <h2
          // className="flex text-[20px] leading-tight font-extrabold"
          className="arti-card__content-title"
        >
          <span>{data.title}</span>
        </h2>
      </div>
      <p className="mt-6">
        <span className="text-[12px] font-medium">
          {utils.formatPublish(data.published_date)}
        </span>
      </p>

      <p className="flex mt-6 text-[20px] font-extrabold">
        <span className="self-start text-[12px] font-semibold">
          {/* Price: */}
        </span>
        {utils.calcPrice(data.published_date)}
        <span className="self-end text-[12px] font-semibold">
          {utils.calcPrice(data.published_date) === "Free" ? "" : "Coins"}
        </span>
      </p>

      <div className="flex mt-6 w-full">
        <CustomButton
          title="View more"
          containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon="/right-arrow.svg"
          handleClick={() => setIsOpen(true)}
        />
      </div>
    </div>
  );
};

export default ArtiCard;
