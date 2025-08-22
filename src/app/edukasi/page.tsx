"use client";
import Footer from "../component/footer";
import PageTemplate from "../component/template";

export default function Home() {
  type SampahItem = {
    title: string;
    link: string;
    description?: string;
  };

  const menu: SampahItem[] = [
    { title: "Pemanfaatan Sampah", link: "/images/pemanfaatan-sampah.svg" },
    {
      title: "Tips memilah sampah",
      link: "/images/kardus-dan-kertas.svg",
      description:
        "Jangan campur kardus dengan kertas kotor atau berminyak. Pisahkan kardus yang tebal dari kertas tipis seperti koran atau majalah.",
    },
    {
      title: "Tips memilah sampah",
      link: "/images/kaleng.svg",
      description:
        "Kosongkan, bilas, dan keringkan agar tidak berkarat atau berbau. Kemudian, remas kaleng supaya lebih kecil dan mudah disimpan.",
    },
    {
      title: "Tips memilah sampah",
      link: "/images/botol.svg",
      description: "Simpan terpisah karena proses daur ulang berbeda.",
    },
    {
      title: "TIPS MEMILAH SAMPAH",
      link: "/images/b3.svg",
      description:
        "Pisahkan sampah B3 seperti baterai, lampu neon, cat, obat kadaluarsa, dan kemasan kimia dari sampah lain.",
    },
    {
      title: "TIPS MEMILAH SAMPAH",
      link: "/images/organik.svg",
      description: "Sampah organik bisa dimanfaatkan sebagai kompos atau pakan ternak untuk mengurangi sampah ke TPA.",
    },
    {
      title: "TIPS MEMILAH SAMPAH",
      link: "/images/tidak-terurai.svg",
      description:
        "Sampah ini tidak bisa didaur ulang atau dikompos, seperti popok, pembalut, tisu bekas, dan styrofoam.",
    },
  ];

  // Pagination state

  return (
    <PageTemplate title="Edukasi" image="/images/edukasi.png">
      <div className="flex flex-col items-center justify-start w-full rounded-t-3xl p-4 text-white gap-6 z-10 overflow-y-scroll h-[80vh] mt-[-50px]">
        {menu.map((t) => (
          <div className="w-full  max-w-[500px] h-fit rounded-2xl flex flex-col items-center gap-5 my-10" key={t.title}>
            <div className="font-semibold text-foreground text-sm w-[80%] shadow-[0px_9px_14px_0px_#FF8D4D33] h-full bg-custom-background rounded-2xl flex items-center justify-center uppercase px-3 py-3">
              {t.title}
            </div>

            <div className="w-full max-w-2xl h-fit z-10">
              <img src={t.link} className="w-full " alt={t.title} />
            </div>
            {t.description ? (
              <p className="before:content-['•'] before:absolute before:left-[-10px] before:z-10 text-foreground text-left w-full relative font-semibold">
                {t.description}
              </p>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      <Footer />
    </PageTemplate>
  );
}
