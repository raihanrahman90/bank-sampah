import Image from "next/image";
import Header from "../component/header";

export default function Home() {
  type MenuItem = {
    title: string;
    image: string;
  };
  const menu: MenuItem[] = [
    {
      title: "PISAHKAN BERDASARKAN JENISNYA",
      image: "/images/pilah-sampah.png",
    },
    {
      title: "CUCI ATAU BERSIHKAN SAMPAH",
      image: "/images/harga-sampah.png",
    },
    {
      title: "BERI PENANDA ATAU LABEL",
      image: "/images/alur-bank-sampah.png",
    },
    {
      title: "SIMPAN DI TEMPAT KERING",
      image: "/images/edukasi.png",
    },
    {
      title: "SETOR KE BANK SAMPAH",
      image: "/images/lokasi.png",
    },
  ];
  return (
    <div className="h-[100vh] bg-custom-primary">
      <Header title="PILAH SAMPAH" image="/images/pilah-sampah.png" />
      <div className="px-5">
        <div className="bg-custom-background p-2 rounded-3xl mt-3 shadow-[0px_9px_14px_0px_#FF8D4D33]">
          <h3 className="text-md text-custom-secondary leading-none font-bold text-center">
            TATA CARA PILAH SAMPAH
          </h3>
        </div>{" "}
      </div>
      <div className="flex flex-col items-start justify-start w-full rounded-t-3xl shadow-xl p-4 text-white gap-2">
        {menu.map((t) => (
          <div className="w-full h-[50px] bg-custom-background" key={t.title}>
            <div className="h-full w-full bg-background rounded-xl flex items-center gap-4 px-2">
              <Image
                src={t.image}
                alt={t.title}
                width={50} // tentukan ukuran gambar
                height={50}
                className="rounded-xl object-cover"
                priority
              />

              <div className="text-center font-semibold text-foreground">
                {t.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
