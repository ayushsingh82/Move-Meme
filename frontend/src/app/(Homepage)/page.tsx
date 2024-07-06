import Memesection from "./_component/meme-section";
import Searchbar from "./_component/search-bar";
import Startcoin from "./_component/start-new-coin";

export default async function Home() {
  return (
    <main className="">
      <div className="w-full min-h-screen bg-grid-black/[0.1] relative flex flex-col ">
        <div className=" h-full flex flex-col">
          <div className="relative z-[29999]">
            <Startcoin />
            <Searchbar />
            <Memesection />
          </div>
        </div>
      </div>
    </main>
  );
}
