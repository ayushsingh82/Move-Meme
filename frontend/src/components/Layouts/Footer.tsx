import React from "react";
import { Cool } from "../custom-icons/cool";
import { Facebook, Twitter } from "lucide-react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-auto text-black py-4  border-t-[1px]  text-sm ">
      <div className="container mx-auto flex justify-between flex-col lg:flex-row items-center">
        <div className="flex gap-x-4 flex-col lg:flex-row items-center gap-y-3">
          <div className="flex gap-x-2 items-center">
            <span> &copy; {new Date().getFullYear()} </span>{" "}
            <div className="flex gap-x-1 capitalize items-center">
              <Cool />
              <span className=" font-black text-2xl">
                meme<span className="bg-primarycolor">Frax</span>
              </span>
            </div>
          </div>

          <span>Disclaimer</span>
          <span>Message us</span>
        </div>
        <div className="flex flex-row gap-x-4 item-center mt-3">
          <div className=" rounded-full border-primarycolor p-2 border-[1px] ">
            <Facebook />
          </div>
          <div className=" rounded-full border-primarycolor p-2 border-[1px] ">
            <Twitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
