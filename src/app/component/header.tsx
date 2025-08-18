import Image from "next/image";
type HeaderProps = {
  title: string;
  image: string;
};

const Header = ({ title, image }: HeaderProps) => {
  return (
    <div className="relative w-[100vw] h-[20vh] mb-[-40px] md:mb-[0px]">
      <Image src="/images/header-background.svg" alt="Header background" fill className="object-cover z-0" priority />
      <h1 className="z-10 absolute top-5 left-5 text-[#3B6958] font-semibold text-3xl uppercase">{title}</h1>
      <div className="w-20 h-20 rounded-full overflow-hidden bg-custom-background right-10 top-10 absolute shadow-[0px_4px_4px_0px_#00000040] p-5">
        <Image src={image} alt="gambar halaman" fill className="object-cover" priority />
      </div>
    </div>
  );
};

export default Header;
