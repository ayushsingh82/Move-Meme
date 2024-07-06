"use client";
import { Cool } from "../custom-icons/cool";
import { ConnectKitButton } from "connectkit";
import { Button } from "../ui/button";
import { useAccount } from "wagmi";

type Props = {};

const Header = (props: Props) => {

  const {isConnected} = useAccount()

  return (
    <header className="w-full py-4">
      <div className="container mx-auto flex justify-between ">
        <div className="flex gap-x-1 capitalize items-center">
          <Cool />
          <span className=" font-black text-2xl">
            meme<span className="bg-primarycolor">Frax</span>
          </span>
        </div>

        <div className="hidden lg:block">
         

        <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show,   }) => {
        return (
          <div className="flex flex-col">
           
            <div className="text-center">
            <Button onClick={show} className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-[#fffdd0]  text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] hover:bg-primarycolor hover:text-white ">
           
            {isConnected ? "Connected" : "Connect Wallet"}
          </Button>
            
          {
            isConnected ? '':''
          }
            </div>
          </div>
        );
      }}
    </ConnectKitButton.Custom>
        </div>
      </div>
    </header>
  );
};

export default Header;
