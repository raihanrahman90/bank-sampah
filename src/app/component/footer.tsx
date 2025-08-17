import Image from "next/image";

type FooterProps = {
  title: string;
  image: string;
};

const Footer = ({ title, image }: FooterProps) => {
  return (
    <div className="relative w-[100vw] h-[20vh]">
      <Image
        src="/images/footer-background.png"
        alt="Header background"
        fill
        className="object-cover "
        priority
      />
      <h2>{title}</h2>
      <div className="rounded-lg">
        <Image src={image} alt="gambar halaman" />
      </div>
      src={image}
    </div>
  );
};

export default Footer;
