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
    {
      title: "Lokasi 1",
      link: "/images/lokasi-1.svg",
      description: "Sepanjang bahu jalan <br/> gunung lingai",
    },
    {
      title: "Lokasi 2",
      link: "/images/lokasi-2.svg",
      description: "bantaran & sungai <br/>area gunung lingai",
    },
    {
      title: "Lokasi 3",
      link: "/images/lokasi-3.svg",
      description: "area selokan besar dan tertutup",
    },
    {
      title: "Lokasi 4",
      link: "/images/lokasi-4.svg",
      description: "Lahan kosong<br/>sekitar rumah warga",
    },
    {
      title: "Lokasi 5",
      link: "/images/lokasi-5.svg",
      description: "playground gunung lingai",
    },
    {
      title: "Lokasi 6",
      link: "/images/lokasi-6.svg",
      description: "area perdagangan gunung lingai",
    },
  ];

  // Pagination state

  return (
    <PageTemplate title="Zona merah" image="/images/zona-merah.png">
      <div className="flex flex-col items-center justify-start w-full rounded-t-3xl p-4 text-white md:gap-6 gap-2 z-10 md:mt-[-20px] overflow-y-scroll">
        {menu.map((t) => (
          <div
            className="w-full  max-w-[500px] h-fit rounded-2xl flex flex-col items-center gap-5 md:my-10"
            key={t.title}
          >
            <div className="font-semibold text-foreground text-sm w-[80%] shadow-[0px_9px_14px_0px_#FF8D4D33] h-full bg-custom-background rounded-2xl flex items-center justify-center uppercase px-3 py-3">
              {t.title}
            </div>

            <div className="w-full max-w-2xl h-fit z-10">
              <img src={t.link} className="w-full " alt={t.title} />
            </div>
            {t.description ? (
              <div className="flex items-center justify-center gap-3">
                <img src="/images/lokasi-bank-sampah-location.svg" className="w-[50px] mt-[-10px]" />
                <p
                  className=" text-foreground text-center w-full relative font-semibold uppercase"
                  dangerouslySetInnerHTML={{ __html: t.description }}
                ></p>
              </div>
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
