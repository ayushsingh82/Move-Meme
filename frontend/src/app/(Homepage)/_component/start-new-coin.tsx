"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const Startcoin = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-center my-10">
      <Button
        asChild
        className="px-8 py-0.5  border-2 flex items-center justify-center hover:shadow-none border-black dark:border-white uppercase bg-[#fffdd0]   text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] hover:bg-primarycolor hover:text-white"
      >
        <Link href={"/start-new-coin"}>Start New coin</Link>
      </Button>
    </div>
  );
};

export default Startcoin;
