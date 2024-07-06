"use client";
import React, { useEffect, useState } from "react";
import TradeBtn from "./TradeBtn";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";

type Props = {
  address: string;
};

const buttonvalues = [
  {
    name: "reset",
    value: 0,
  },
  {
    name: "1",
    value: 1,
  },
  {
    name: "5",
    value: 2,
  },
  {
    name: "10",
    value: 3,
  },
];

const TradeBox = (props: Props) => {
  const { address } = props;
  console.log(address);
  const [selectedprice, setSelectedprice] = useState<number>(0);
  const { register, handleSubmit, setValue, watch, getValues } = useForm({
    defaultValues: { price: 1 },
  });

  const onSubmit = (data: any) => {
    const tradeitem = {
      solanaamount: data.price,
    };

    console.log(tradeitem);
  };

  const watchPrice = watch("price", selectedprice);

  const equivalentcoinprice = selectedprice * 7585930858930.84949404;

  useEffect(() => {
    // Update selectedprice state when watchPrice changes
    const value = getValues("price");
    setSelectedprice(value || 0); // Default to 0 if input is empty
  }, [watchPrice, getValues]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[25rem] mx-auto rounded-lg  bg-[#fffdd0] min-h-32 border-primarycolor border-[1px] p-3 py-6"
    >
      <div className="w-full">
        <div className="rounded bg-primarycolor  grid place-content-center text-black font-semibold max-w-max px-4 py-2 mx-auto capitalize">
          presale
        </div>
        <div className="w-full my-5 flex  justify-between">
          <TradeBtn>
            <span>switch to CAPTION</span>
          </TradeBtn>
          <TradeBtn>
            <span>set slippage</span>
          </TradeBtn>
        </div>

        <div className="">
          <Input
            className="bg-[#fffdd0] border-[2px] border-primarycolor font-bold"
            value={watchPrice ? watchPrice : selectedprice}
            {...register("price", { valueAsNumber: true })}
          />
        </div>

        <div className="w-full my-5 flex gap-x-3 flex-wrap max-lg:items-center max-lg:justify-center gap-y-2  ">
          {buttonvalues.map((button, index) => (
            <TradeBtn
              key={index}
              onClick={() => {
                setSelectedprice(button.value);
                setValue("price", button.value);
              }}
              className={cn(
                `${
                  +selectedprice === +button
                    ? "!bg-primarycolor !text-bold"
                    : ""
                }`
              )}
            >
              <span className="flex gap-x-1">
                <span className="">{button.name} </span>
                <span>fraxeth</span>
              </span>
            </TradeBtn>
          ))}
        </div>

        <div className="flex gap-x-1">
          <span className="font-semibold text-sm">
            {equivalentcoinprice.toFixed(2)}
          </span>
          <span className="text-primarycolor font-bold">CAPTION</span>
        </div>

        <Button
          className="px-8 py-0.5 my-5 w-full  border-2 border-black dark:border-white uppercase bg-[#fffdd0]   text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] hover:bg-primarycolor hover:text-white hover:shadow-none"
          type="submit"
        >
          place trade
        </Button>
      </div>
    </form>
  );
};

export default TradeBox;
