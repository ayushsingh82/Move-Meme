import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MemeList from "./meme-list";

type Props = {};

const Memesection = (props: Props) => {
  return (
    <Tabs defaultValue="Terminal" className="container mt-10">
      <TabsList className="grid w-full grid-cols-2 lg:w-[250px] bg-[#fffdd0] ">
        <TabsTrigger value="Following">Following</TabsTrigger>
        <TabsTrigger value="Terminal">Terminal</TabsTrigger>
      </TabsList>
      <TabsContent value="Terminal">
        <MemeList />
      </TabsContent>
      <TabsContent value="Following">
        <div className="mt-4 w-full font-semibold">
          Connect your wallet to see a feed of your friends
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Memesection;
