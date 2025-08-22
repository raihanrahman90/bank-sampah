import Image from "next/image";
type HeaderProps = {
  title: TrustedHTML;
  image: string;
};

const Header = ({ title, image }: HeaderProps) => {
  return (
    <div className="relative w-full h-[15vh] mb-[-40px] md:mb-0">
      <Image
        src="/images/header-background.svg"
        alt="Header background"
        height={100}
        width={100}
        className="z-0 h-[240px] mt-[-20px] w-full absolute"
        priority
      />
      <div className="max-w-[550px] relative mx-auto">
        <div className="w-[80%] absolute top-5 left-5 z-10 ">
          <h1
            className="z-10 text-[#3B6958] font-semibold text-3xl uppercase break-words"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
        </div>

        {image && image.trim() !== "" && (
          <div className="aspect-square h-25 rounded-full overflow-hidden bg-custom-background md:right-[10%] right-10 top-10 absolute shadow-[0px_4px_4px_0px_#00000040] p-5">
            <img src={image} alt="gambar halaman" className="h-[60px]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
