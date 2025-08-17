import Image from "next/image";

type HeaderProps = {
  title: string;
  image: string;
};

const Header = ({ title, image }: HeaderProps) => {
  return (
    <div className="relative w-[100vw] h-[20vh] mb-[-40px]">
      <Image
        src="/images/header-background.svg"
        alt="Header background"
        fill
        className="object-cover "
        priority
      />
    </div>
  );
};

export default Header;
