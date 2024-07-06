import React from "react";
import { CustomForm } from "../_component/start-new-coin-form";
import Clientbutton from "@/components/ui/Clientbutton";
import { ArrowLeft, ArrowLeftToLine } from "lucide-react";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="py-4 container bg-grid-black/[0.1] min-h-screen ">
      <div className="w-full">
        <div className="flex items-center gap-x-1 capitalize">
          <ArrowLeft className="size-3" />
          <Clientbutton href="/" title="back" />
        </div>
      </div>

      <div className="w-full flex items-center justify-center text-center mt-4 mb-10">
        <p className="text-2xl lg:text-4xl font-bold text-black/70 capitalize ">
          start a new coin
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <CustomForm />
      </div>
      <div className="hidden lg:block absolute bottom-0 left-10">
        <Image
          src={"/svg/man-riding-a-rocket.svg"}
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
