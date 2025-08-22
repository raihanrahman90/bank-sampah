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
    image: "/images/nasabah-pilah-sampah-mulai-dari-rumah.svg",
    height: 150,
    width: 100,
  },
  {
    title: "nasabah datang ke bank sampah bawa sampah dan buku tabungan",
    image: "/images/nasabah-datang-ke-bank-sampah-bawa-sampah-dan-buku-tabungan.svg",
    height: 150,
    width: 70,
  },
  {
    title: "sampah ditimbang di bank sampah",
    image: "/images/sampah-ditimbang-di-bank-sampah.svg",
    height: 50,
    width: 70,
  },
  {
    title: "hasil timbangan dicatat di buku tabungan",
    image: "/images/hasil-timbangan-dicatat-di-buku-tabungan.svg",
    height: 50,
    width: 100,
  },
  {
    title: "pengurus melakukan pemilahan sampah",
    image: "/images/pengurus-melakukan-pemilahan-sampah.svg",
    height: 50,
    width: 100,
  },
  {
    title: "sampah siap dijual ke bank sampah induk",
    image: "/images/sampah-siap-dijual-ke-bank-sampah-induk.svg",
    height: 50,
    width: 100,
  },
];

export default function AlurBankSampahPage() {
  return (
    <Template title="alur bank sampah" image="/images/alur-bank-sampah.png">
      <div className="sm:mt-20 h-[80vh] overflow-y-scroll flex flex-col gap-10 pt-10 pb-10">
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
                className="rounded-xl object-cover mx-auto z-10"
                priority
              />
              <div className="ml-auto text-center font-semibold text-foreground text-sm w-1/2 uppercase">{t.title}</div>
            </div>
          </div>
        ))}
      </div>
    </Template>
  );
}
