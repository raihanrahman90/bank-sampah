import Image from "next/image";
import Link from "next/link";
import PageTemplate from "../component/template";

export default function Home() {
  const now = new Date();
  const dayName = now.toLocaleDateString("id-ID", {
    weekday: "long",
    timeZone: "Asia/Makassar", // UTC+8
  });

  console.log(dayName);
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
    <PageTemplate title="SIPILAH" image="/images/logo.svg" logoKKN="/images/logo-kkn.png">
      <div className="px-5">
        <h3 className="text-[32px] md:text-5xl text-custom-dark leading-none mt-2 font-bold text font-title">
          Selamat Datang
        </h3>
      </div>
      <div
        className="flex flex-col items-start justify-start 
             sm:items-center sm:h-[70vh] h-[75vh] w-full 
             rounded-t-3xl shadow-xl p-4 bg-custom-secondary text-white
             px-10 absolute left-0 bottom-0 overflow-y-scroll"
      >
        <div className="w-fit mx-auto">
          <h1 className="text-xl font-bold text-background mb-3">KATEGORI LAYANAN</h1>
          <div className="grid grid-cols-3 grid-rows-2 items-start gap-4">
            {menu.map((t) => (
              <Link href={t.link} key={t.link} className="flex">
                <div className="w-[100px] sm:w-[200px] h-fit" key={t.title}>
                  <div
                    className="h-[90px] bg-background w-full
                  rounded-xl flex justify-center relative
                  aspect-square mx-auto p-2 items-center"
                  >
                    <Image
                      src={t.image}
                      alt={t.title}
                      className="bg-background rounded-2xl w-[80%] aspect-square"
                      width={500}
                      height={500}
                    />{" "}
                  </div>
                  <div key={t.title} className="text-center font-semibold text-sm mt-2">
                    {t.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full">
          <h3 className="poppins font-bold text-xl text-left w-full">Halo, Saatnya ingat!</h3>
          <p className="text-left ml-10 font-semibold">{`Selamat hari ${dayName}`}!</p>
          <p className="ml-10">Sudahkah kamu memilah sampah hari ini</p>
          <p className="ml-10">Mari jaga bumi dari rumah.</p>
        </div>
      </div>
    </PageTemplate>
  );
}
