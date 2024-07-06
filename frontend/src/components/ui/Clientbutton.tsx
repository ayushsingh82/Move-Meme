import React from "react";
import { Button } from "./button";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

const Clientbutton = (props: Props) => {
  const { href, title } = props;
  return (
    <Button asChild variant={"link"} className="px-0">
      <Link href={href}>{title}</Link>
    </Button>
  );
};

export default Clientbutton;
