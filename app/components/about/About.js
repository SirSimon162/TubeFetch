import Image from "next/image";
function About() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20" id="About">
      <div className="inline font-bold text-[30px] sm:text-[60px]">
        <span className="text-white">About </span>
        <span className="custom-gradient-text border-b-4 border-white px-1">
          TubeFetch
        </span>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-10 mt-6 sm:mt-10 px-5">
        <div className="w-[80%] sm:max-w-[550px] text-center sm:text-left text-white">
          <p>
            TubeFetch is a platform where you can enjoy YouTube videos without
            the clutter of advertisements and unrelated recommendations,
            fostering an uninterrupted journey through the content you love. Our
            user-friendly search feature lets you quickly find and access a vast
            array of YouTube videos. Join us as a contributor—developers,
            designers, testers, and idea-driven individuals—to enhance TubeFetch
            and maintain its reliability, efficiency, and user-friendliness.
          </p>
          <a
            href="https://github.com/SirSimon162/TubeFetch"
            rel="noreferrer"
            target="__blank"
          >
            <button className="bg-gradient-to-r from-purple-600 to-yellow-600 text-white font-bold px-4 sm:px-6 py-1 mt-4">
              Contribute
            </button>
          </a>
        </div>
        <Image
          src="/player-01.png"
          alt="player"
          width="100"
          height="100"
          className="w-[250px] sm:block hidden"
        />
      </div>
    </div>
  );
}

export default About;
