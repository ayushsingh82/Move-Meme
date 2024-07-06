import Image from "next/image";
import Link from "next/link";
import React from "react";

type MemecardProps = {
  memeData: {
    id: string;
    imageUrl: string;
    creator: string;
    address: string;
    tokenName: string;
    description: string;
  };
};

const Memecard: React.FC<MemecardProps> = ({ memeData }) => {
  const { id, imageUrl, creator, address, tokenName, description } = memeData;

  return (
    <Link href={`/${address}`}>
      <div className="w-full min-h-[200px] bg-[#fffdd0] -z-[30] shadow-sm  shadow-primarycolor/50 hover:shadow-none border-primarycolor border-[1px] rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full gap-x-3">
          <div className="h-[300px] w-full lg:h-[200px] lg:w-[150px] relative">
            <Image
              src={imageUrl}
              alt="memeimage"
              fill
              className="object-cover absolute h-full w-full group-hover:scale-105 cursor-pointer transition-all duration-300"
              priority
              loading="eager"
            />
          </div>
          <div className="flex-1 flex-col gap-y-4 capitalize py-3 px-3">
            <div className="flex gap-x-3 text-sm items-center">
              <span className="font-semibold text-primarycolor text-sm">
                created by
              </span>
              <span className="text-[14px] font-semibold ">{creator.slice(0,-25)}</span>
            </div>
            <div className="flex gap-x-3 text-sm items-center">
              <span className="font-semibold text-primarycolor text-sm">
                address
              </span>
              <span className="text-[14px] font-semibold ">{address.slice(0,-25)}</span>
            </div>
            <div className="flex gap-x-3 text-sm flex-col justify-center">
              <div className="flex gap-x-3">
                <span className="font-semibold text-primarycolor">
                  token name
                </span>
                <span className="text-[14px] font-semibold ">{tokenName}</span>
              </div>

              <span className="mt-1 font-medium">{description}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Memecard;
