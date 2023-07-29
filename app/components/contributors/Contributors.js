import Image from "next/image";
import ReactMarkdown from "react-markdown";

function Contributors() {
  const markdownContent = `[![Contributors](https://contrib.rocks/image?repo=SirSimon162/TubeFetch)](https://github.com/SirSimon162/TubeFetch/graphs/contributors)`;
  return (
    <div
      className="w-full flex flex-col items-center justify-center py-20 bg-black bg-opacity-60"
      id="Contributors"
    >
      <div className="inline font-bold text-[30px] sm:text-[60px]">
        <span className="text-white">Contributors</span>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:w-full items-stretch justify-center mt-6 sm:mt-10 px-20 sm:px-52">
        <div className="border-gradient p-2 flex flex-col justify-center items-center">
          <Image
            src={"https://avatars.githubusercontent.com/u/103681122?v=4"}
            alt="maintainer"
            width="100"
            height="100"
            className="w-[150px]"
          />
          <p className="text-center text-white text-base mt-2">
            Anmol Pattnayak
          </p>
          <a
            href="https://github.com/SirSimon162"
            rel="noreferrer"
            target="blank"
            className="text-center text-gray-400 text-sm"
          >
            SirSimon162
          </a>
        </div>
        <div className="border-gradient p-2 flex flex-1">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Contributors;
