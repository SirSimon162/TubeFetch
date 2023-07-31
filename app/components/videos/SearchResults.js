import Image from "next/image";
import Link from "next/link";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { useEffect, useState, useContext } from "react";
import Search from "./Search";

import YTContext from "../../context/YTContext";

function SearchResults() {
  const { searchQuery, setSelectedVideoId } = useContext(YTContext);
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    if (searchQuery.trim() === "") {
      alert("Please enter something to search.");
    } else {
      fetchFromAPI(`search?part=snippet&q=${encodeURIComponent(searchQuery)}`)
        .then((data) => {
          setVideos(data.items);
        })
        .catch((error) => {
          console.error("Error fetching videos:", error);
        });
    }
  }, [searchQuery]);
  return (
    <div className="flex flex-col items-center py-10 bg-black bg-opacity-70">
      <div className="min-w-[300px] w-[50%]">
        <Search />
        <div className="flex flex-col mt-5 gap-2 sm:gap-5">
          <div className="text-white text-lg">Showing results for <span className="custom-gradient-text font-semibold">{searchQuery}</span></div>
          {videos &&
            videos.map((video, index) => (
              <Link
                key={video.id?.videoId || index}
                className="flex gap-2 sm:gap-5 text-white cursor-pointer"
                href={`/video/${video.id?.videoId}`}
                onClick={() => setSelectedVideoId(video.id?.videoId)}
              >
                <div className="object-fill w-[25%] h-[100%]">
                  <Image
                    src={video.snippet.thumbnails.default.url}
                    alt="thumbnail"
                    width="200"
                    height="200"
                    className="border-gradient"
                  />
                </div>
                <div className="w-[75%]">
                  <h3 className="font-medium text-sm sm:text-base md:text-lg line-clamp-1">
                    {video.snippet.title}
                  </h3>
                  <h4 className="font-normal text-xs sm:text-sm md:text-base text-gray-400">
                    {video.snippet.channelTitle}
                  </h4>
                  <p className="font-normal text-xs text-gray-500 line-clamp-1 lg:line-clamp-2">
                    {video.snippet.description}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
