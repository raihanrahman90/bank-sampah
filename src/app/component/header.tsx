import Image from "next/image";
type HeaderProps = {
  title: TrustedHTML;
  image: string;
};

const Header = ({ title, image }: HeaderProps) => {
  return (
    <div className="relative w-full h-[22vh] mb-[-40px] md:mb-0">
      <Image src="/images/header-background.svg" alt="Header background" fill className="z-0 h-[100px]" priority />
      <div className="max-w-[550px] relative mx-auto">
        <div className="w-[80%] absolute top-5 left-5 z-10 ">
          <h1
            className="z-10 text-[#3B6958] font-semibold text-3xl uppercase break-words"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
        </div>

        {image && image.trim() !== "" && (
          <div className="aspect-square h-20 rounded-full overflow-hidden bg-custom-background md:right-[20%] right-10 top-10 absolute shadow-[0px_4px_4px_0px_#00000040] p-5">
            <Image src={image} alt="gambar halaman" fill className="object-cover" priority />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
