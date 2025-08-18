import Image from "next/image";
import Header from "./component/header";
import Link from "next/link";

export default function Home() {
  type MenuItem = {
    title: string;
    image: string;
    link: string;
  };
  const menu: MenuItem[] = [
    {
      title: "PILAH SAMPAH",
      image: "/images/pilah-sampah.png",
      link: "/pilah-sampah",
    },
    {
      title: "HARGA SAMPAH",
      image: "/images/harga-sampah.png",
      link: "/harga-sampah",
    },
    {
      title: "ALUR BANK SAMPAH",
      image: "/images/alur-bank-sampah.png",
      link: "/alur-bank-sampah",
    },
    {
      title: "EDUKASI",
      image: "/images/edukasi.png",
      link: "/edukasi",
    },
    {
      title: "LOKASI",
      image: "/images/lokasi.png",
      link: "/lokasi",
    },
    {
      title: "ZONA MERAH",
      image: "/images/zona-merah.png",
      link: "/zona-merah",
    },
  ];
  return (
    <div className="h-[100vh] bg-custom-primary">
      <Header title="" image="" />
      <div className="px-5">
        <h3 className="text-[48px] text-custom-secondary leading-none mt-2 font-bold">
          Selamat
          <span className="hidden sm:inline">
            <br />
          </span>
          Datang
        </h3>
      </div>
      <div className="flex flex-col items-start justify-start sm:items-center h-[60vh] w-full fixed bottom-0 left-0 rounded-t-3xl shadow-xl p-4 bg-custom-secondary text-white">
        <h1 className="text-xl font-bold text-background mb-3">KATEGORI LAYANAN</h1>
        <div className="grid grid-cols-3 grid-rows-2 items-start gap-4">
          {menu.map((t) => (
            <Link href={t.link} key={t.link} className="flex">
              <div className="w-[100px] sm:w-[200px] h-fit" key={t.title}>
                <div className="h-[70px] sm:h-[200px] w-full bg-background rounded-xl flex justify-center relative">
                  <Image
                    src={t.image}
                    alt={t.title}
                    className="object-cover bg-background rounded-2xl w-[50%] h-auto"
                    fill
                    priority
                  />
                </div>
                <div key={t.title} className="text-center font-semibold">
                  {t.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
