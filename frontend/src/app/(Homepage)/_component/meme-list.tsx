"use client";
import { useState } from "react";
import Memecard from "./meme-card";
import memeDataArray from "@/Data/data";
import { Button } from "@/components/ui/button";

type Props = {};

const MemeList = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const memesPerPage = 10;

  const indexOfLastMeme = currentPage * memesPerPage;
  const indexOfFirstMeme = indexOfLastMeme - memesPerPage;
  const currentMemes = memeDataArray.slice(indexOfFirstMeme, indexOfLastMeme);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const showLess = () => {
    setCurrentPage(1);
  };

  return (
    <section className="mt-4 w-full">
      {/* <MemeSort /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4">
        {currentMemes.map((memeData) => (
          <Memecard key={memeData.id} memeData={memeData} />
        ))}
      </div>

      <div className="mt-4 w-full flex items-center justify-center">
        {memeDataArray.length > indexOfLastMeme && (
          <Button
            className="px-8 py-0.5 mx-auto hover:shadow-none max-w-max border-2 border-black dark:border-white uppercase bg-[#fffdd0] text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] hover:bg-primarycolor hover:text-white"
            onClick={loadMore}
          >
            Load More
          </Button>
        )}
        {memeDataArray.length <= indexOfLastMeme && (
          <Button
            className="px-8 py-0.5 mx-auto ml-4 hover:shadow-none max-w-max border-2 border-black dark:border-white uppercase bg-[#fffdd0] text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] hover:bg-primarycolor hover:text-white"
            onClick={showLess}
          >
            Show Less
          </Button>
        )}
      </div>
    </section>
  );
};

export default MemeList;
