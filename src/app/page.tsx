import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] max-w-[450px] mx-auto overflow-hidden bg-gradient-to-b from-[#EEF592] to-[#62D648] relative">
      <Image
        alt="aset bottom"
        height={100}
        width={100}
        src={"/images/start-top-left.svg"}
        className="top-0 absolute w-[40%]"
      />
      <Image
        alt="logo 2"
        height={100}
        width={100}
        src={"/images/logo_2.svg"}
        className="top-0 absolute w-[100px] mt-5 ml-5"
      />

      <Image
        alt="aset bottom"
        height={100}
        width={100}
        src={"/images/start-bottom.svg"}
        className="bottom-0 absolute w-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 gap-10">
        <h2 className="uppercase text-center text-custom-dark text-2xl font-bold">
          pemerintah kota samarinda kelurahan gunung lingai
        </h2>
        <Image alt="logo sipilah" src={"/images/logo.svg"} height={240} width={240} />
        <div className="relative">
          <Image
            alt="logo sipilah"
            src={"/images/sipilah-aset.svg"}
            height={100}
            width={100}
            className="absolute top-[-50px] right-[-50px]"
          />
          <h3
            className="uppercase text-[40px] font-title text-[#FFDDFF]"
            style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
          >
            Sipilah
          </h3>
        </div>
      </div>
      <Link
        href="/home"
        className="poppins-bold text-custom-dark 
        text-[32px] px-10 w-[300px] bg-white absolute 
        left-1/2 -translate-x-1/2 bottom-0 
        translate-y-[-100px] rounded-[50px] text-center py-3 shadow-2xl hover:bg-custom-dark hover:text-white"
      >
        START NOW
      </Link>
    </div>
  );
}
