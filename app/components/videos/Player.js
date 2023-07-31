import { useContext, useEffect, useState } from "react";
import YTContext from "../../context/YTContext";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

function Player() {
  const { selectedVideoId } = useContext(YTContext);
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    if (selectedVideoId) {
      fetchFromAPI(`videos?part=snippet&id=${selectedVideoId}`)
        .then((data) => {
          if (data.items && data.items.length > 0) {
            setVideoData(data.items[0]);
          }
        })
        .catch((error) => {
          console.error("Error fetching video data:", error);
        });
    }
  }, [selectedVideoId]);
  if (!videoData) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-start mt-5 w-[50%]">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${selectedVideoId}`}
          width="100%"
          height="100%"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-white font-semibold text-xl">
          {videoData.snippet.title}
        </p>
        <p className="text-gray-400">{videoData.snippet.channelTitle}</p>
      </div>
    </div>
  );
}

export default Player;
