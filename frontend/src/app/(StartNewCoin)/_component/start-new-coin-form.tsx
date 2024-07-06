"use client";

import { useState,useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDown, Clipboard } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {useAccount, useWriteContract,useWaitForTransactionReceipt } from 'wagmi'
import abi from "../Abi/memefactory.json";
// Define the form schema with validation for the image file
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  ticker: z.string().min(1, {
    message: "Ticker is required.",
  }),
  totalsupply: z.any({
    message: "totalsupply is required.",
  }),
  image: z.any({
    message: "Image must be a file.",
  }),
  twitterLink: z.string().url().optional(),
  facebookLink: z.string().url().optional(),
  linkedinLink: z.string().url().optional(),
});

export function CustomForm() {
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [tx, settx] = useState<string | undefined>(undefined);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      ticker: "",
    },
  });
  const {address} = useAccount();
  const result = useWriteContract()
  
 const resultstat =result.status
 console.log(resultstat,"ggg")


  console.log(result.isSuccess,"kkk")
 async function onSubmit(values: z.infer<typeof formSchema>) {
    let tx = await  result?.writeContractAsync({ 
      abi,
      address: '0x84767Daf924dC4c9FE429f75C7D6ad1E8493eC76',
      functionName: 'createMemecoin',
      args: [
        values.name,
        values.ticker,
        values.description,
        address,
        values.totalsupply*10**18,
        10
      ],
   })
  
   settx(tx)

   
    // Do something with the form values
    // Convert image file to base64 or handle it as needed
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("ticker", values.ticker);
    formData.append("image", values.image);
    if (values.twitterLink) formData.append("twitterLink", values.twitterLink);
    if (values.facebookLink)
      formData.append("facebookLink", values.facebookLink);
    if (values.linkedinLink)
      formData.append("linkedinLink", values.linkedinLink);

    // Handle the form submission logic
    console.log(formData);
  }

  console.log(tx,"ll")
  const resultx = useWaitForTransactionReceipt({
    // @ts-ignore
    hash:tx,
  })
  console.log(resultx,"llg")
 const resultxcheck = resultx
  useEffect(() => {
   
    // console.log(publicMinthash, publicMintstatus, "status>>>>");
    if (resultxcheck) {
      toast({
        title: "Sucessfully created your token",
        className:
          "flex flex-col gap-y-8 bg-[#fffdd0] border-2 border-primarycolor",
        action: (
          <ToastAction altText="Try again">
            {/* <div className="flex gap-x-2 flex-col gap-y-2 items-center ">
              <span>0x8339949933393938</span>
              <span>copy address</span>
              <Clipboard />
            </div> */}
          </ToastAction>
        ),
      });
    }
   
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className="bg-[#fffdd0] "
                  placeholder="Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="bg-[#fffdd0] "
                  placeholder="Description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ticker"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ticker</FormLabel>
              <FormControl>
                <Input
                  className="bg-[#fffdd0] "
                  placeholder="Ticker"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="totalsupply"
          render={({ field }) => (
            <FormItem>
              <FormLabel>TotalSupply</FormLabel>
              <FormControl>
                <Input
                  className="bg-[#fffdd0] "
                  placeholder="totalsupply"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        

        <div className="optional-fields-toggle">
          <Button
            variant={"link"}
            type="button"
            onClick={() => setShowOptionalFields(!showOptionalFields)}
            className="flex gap-x-2 px-0"
          >
            {showOptionalFields ? "Hide" : "Show"} Show more options{" "}
            <ArrowDown />
          </Button>
        </div>

        {showOptionalFields && (
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="twitterLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Twitter Link</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Twitter Link"
                      {...field}
                      className="bg-[#fffdd0] "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="facebookLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook Link</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Facebook Link"
                      {...field}
                      className="bg-[#fffdd0] "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedinLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn Link</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#fffdd0] "
                      placeholder="LinkedIn Link"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <p>Data cannot be changed after coin creation</p>
                </FormItem>
              )}
            />
          </div>
        )}

        <Button
          className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-[#fffdd0]  text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] hover:bg-primarycolor hover:text-white "
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
