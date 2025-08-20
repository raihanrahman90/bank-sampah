import Image from "next/image";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[30vh] z-[1]">
      <Image src="/images/footer-background.png" alt="Header background" fill className="object-cover " priority />
    </div>
  );
};

export default Footer;
