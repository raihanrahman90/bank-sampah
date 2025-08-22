import Image from "next/image";
type HeaderProps = {
  title: TrustedHTML;
  image: string;
};

const Header = ({ title, image }: HeaderProps) => {
  return (
    <div className="relative w-full h-[15vh] mb-[-40px] md:mb-0 bg-[url('/images/header-background.svg')] bg-cover bg-center">
      <div className="max-w-[550px] relative mx-auto">
        <div className="w-[80%] absolute top-5 left-5 z-10 ">
          <h1
            className="z-10 text-[#3B6958] font-semibold text-3xl uppercase break-words"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
        </div>

        {image && image.trim() !== "" && (
          <div className="aspect-square sm:h-25 h-15 rounded-full overflow-hidden bg-custom-background md:right-[10%] sm:right-10 sm:top-10 right-5 top-5 absolute shadow-[0px_4px_4px_0px_#00000040] sm:p-5">
            <img src={image} alt="gambar halaman" className="h-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
