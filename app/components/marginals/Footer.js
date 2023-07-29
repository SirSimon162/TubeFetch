const footerYear = new Date().getFullYear()

function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-12">
      <p className="custom-gradient-text font-extrabold text-[30px]">
        TubeFetch
      </p>
      <p className="text-white text-base text-center">
        Maintained by Anmol Pattnayak{" "}
        <a
          href="https://github.com/SirSimon162"
          rel="noreferrer"
          target="blank"
        >
          (SirSimon162)
        </a>
      </p>
      <div className="bg-white w-[90%] h-[2px] mt-12"></div>
      <p className="text-white text-sm py-5">TubeFetch &copy;{footerYear}. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
