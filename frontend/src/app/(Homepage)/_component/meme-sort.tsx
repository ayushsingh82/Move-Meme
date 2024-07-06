import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

const MemeSort = (props: Props) => {
  return (
    <div className="flex gap-x-4 max-lg:items-center max-lg:justify-center w-full">
      <Select>
        <SelectTrigger className="w-[180px] font-semibold bg-primarycolor ">
          <SelectValue placeholder="sort: bump order" />
        </SelectTrigger>
        <SelectContent className="relative">
          <SelectItem value="bump order"> sort:Bump order</SelectItem>
          <SelectItem value="last reply"> sort:last reply</SelectItem>
          <SelectItem value="currenly live">sort:currently live</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="max-w-max font-semibold bg-primarycolor">
          <SelectValue placeholder="order: asc" />
        </SelectTrigger>
        <SelectContent className="font-semibold bg-primarycolor">
          <SelectItem value="asc">order: asc</SelectItem>
          <SelectItem value="dsc">order: dsc</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default MemeSort;
