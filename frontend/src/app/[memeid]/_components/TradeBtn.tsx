import React from "react";

type Props = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

const TradeBtn = (props: Props) => {
  const { onClick, children, className } = props;
  return (
    <div
      onClick={onClick}
      className={`rounded bg-primarycolor/50 text-sm cursor-pointer tracking-tight text-black/70 border-primarycolor border-[2px] grid place-content-center font-medium max-w-max px-4 py-1  capitalize ${className}`}
    >
      {children}
    </div>
  );
};

export default TradeBtn;
