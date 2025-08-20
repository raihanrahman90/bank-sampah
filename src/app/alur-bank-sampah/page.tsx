import Image from "next/image";
import Template from "../component/template";

type MenuItem = {
  title: string;
  image: string;
  height: number;
  width: number;
};
const menu: MenuItem[] = [
  {
    title: "nasabah pilah sampah mulai dari rumah",
    image: "/images/nasabah-pilah-sampah-mulai-dari-rumah.png",
    height: 150,
    width: 80,
  },
  {
    title: "nasabah datang ke bank sampah bawa sampah dan buku tabungan",
    image: "/images/nasabah-datang-ke-bank-sampah-bawa-sampah-dan-buku-tabungan.png",
    height: 150,
    width: 80,
  },
  {
    title: "sampah ditimbang di bank sampah",
    image: "/images/sampah-ditimbang-di-bank-sampah.png",
    height: 50,
    width: 100,
  },
  {
    title: "pengurus melakukan pemilahan sampah",
    image: "/images/simpan-di-tempat-kering.png",
    height: 50,
    width: 100,
  },
  {
    title: "sampah siap di jual ke bank sampah induk",
    image: "/images/setor-ke-bank-sampah.png",
    height: 50,
    width: 80,
  },
];

export default function AlurBankSampahPage() {
  return (
    <Template title="alur bank sampah" image="/images/alur-bank-sampah.png">
      {menu.map((t) => (
        <div
          className="w-full h-[50px] bg-custom-background shadow-[0px_9px_14px_0px_#FF8D4D33] rounded-2xl"
          key={t.title}
        >
          <div className="h-full w-full bg-custom-background rounded-xl flex items-center gap-4 px-2">
            <Image
              src={t.image}
              alt={t.title}
              width={t.width}
              height={t.height}
              className="rounded-xl object-cover sm:ml-auto"
              priority
            />
            <div className="ml-auto text-center font-semibold text-foreground text-sm w-1/2 uppercase">{t.title}</div>
          </div>
        </div>
      ))}
    </Template>
  );
}
