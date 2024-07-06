import Clientbutton from "@/components/ui/Clientbutton";
import { ArrowLeft } from "lucide-react";
import React from "react";
import TradeBox from "./_components/TradeBox";
import Image from "next/image";

type Props = {
  params: {
    memeid: string;
  };
};

const page = (props: Props) => {
  const { params } = props;
  return (
    <section className="py-16 container mx-auto min-h-screen bg-grid-black/[0.1]">
      <div className="w-full">
        <div className="flex items-center gap-x-1 capitalize">
          <ArrowLeft className="size-3" />
          <Clientbutton href="/" title="back" />
        </div>
      </div>
      <div className="w-full">
        <TradeBox address={params.memeid} />
      </div>

      <div className="hidden lg:block absolute bottom-0 right-10">
        <Image
          src={"/svg/app-launch.svg"}
          alt="app launch image"
          className=""
          height={400}
          width={400}
          loading="eager"
        />
      </div>
    </section>
  );
};

export default page;
