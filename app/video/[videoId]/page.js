"use client";
import Search from "../../components/videos/Search";
import Player from "../../components/videos/Player";

function page() {
  return (
    <div className="flex flex-col items-center py-10 bg-black bg-opacity-70">
      <div className="min-w-[300px] w-[50%]">
        <Search />
      </div>
      <Player />
    </div>
  );
}

export default page;
