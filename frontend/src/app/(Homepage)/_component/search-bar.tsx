"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {};

const Searchbar = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-center container mx-auto">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" className="bg-[#fffdd0] " placeholder="search.." />
        <Button
          type="submit"
          className="px-8 py-0.5 hover:shadow-none  border-2 border-black dark:border-white uppercase bg-[#fffdd0]  text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] hover:bg-primarycolor hover:text-white"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
