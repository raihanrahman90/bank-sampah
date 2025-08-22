import Image from "next/image";
import PageTemplate from "../component/template";

type MenuItem = {
  title: string;
  image: string;
  height: number;
  width: number;
};
const menu: MenuItem[] = [
  {
    title: "PISAHKAN BERDASARKAN JENISNYA",
    image: "/images/pisahkan-berdasarkan-jenisnya.svg",
    height: 150,
    width: 100,
  },
  {
    title: "CUCI ATAU BERSIHKAN SAMPAH",
    image: "/images/cuci-atau-bersihkan-sampah.svg",
    height: 150,
    width: 80,
  },
  {
    title: "BERI PENANDA ATAU LABEL",
    image: "/images/beri-penanda-atau-label.svg",
    height: 50,
    width: 100,
  },
  {
    title: "SIMPAN DI TEMPAT KERING",
    image: "/images/simpan-di-tempat-kering.svg",
    height: 50,
    width: 100,
  },
  {
    title: "SETOR KE BANK SAMPAH",
    image: "/images/setor-ke-bank-sampah.svg",
    height: 50,
    width: 80,
  },
];
export default function Home() {
  return (
    <PageTemplate title="Pilah Sampah" image="/images/pilah-sampah.png">
      <div className="px-5 w-full bg-custom-background py-4 rounded-3xl mt-5 shadow-[0px_9px_14px_0px_#FF8D4D33]">
        <h3 className="text-md text-custom-secondary leading-none font-bold text-center">TATA CARA PILAH SAMPAH</h3>
      </div>
      <div className="flex flex-col items-start justify-start w-full rounded-t-3xl p-4 pb-10 text-white gap-10 overflow-y-scroll">
        {menu.map((t) => (
          <div
            className="w-full h-[50px] bg-custom-background shadow-[0px_9px_14px_0px_#FF8D4D33] rounded-2xl"
            key={t.title}
          >
            <div className="h-full w-full bg-custom-background rounded-xl flex items-center gap-4 px-2">
              <Image
                src={t.image}
                alt={t.title}
                width={t.width} // tentukan ukuran gambar
                height={t.height}
                className="rounded-xl object-cover ml-auto"
                priority
              />
              <div className="ml-auto text-center font-semibold text-foreground text-sm w-1/2">{t.title}</div>
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}
