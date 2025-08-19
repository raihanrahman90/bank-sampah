import Image from "next/image";
import Header from "../component/header";
import LokasiBankSampah from "./data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] bg-custom-primary">
      <Header title="Lokasi bank <br/>sampah" image="/images/lokasi.png" />
      <div className="px-5">
        <div className="bg-custom-background p-2 py-4 mb-5 rounded-3xl mt-5 shadow-[0px_9px_14px_0px_#FF8D4D33]">
          <h3 className="text-md text-custom-secondary leading-none font-bold text-center">NAMA NAMA BANK SAMPAH</h3>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full rounded-t-3xl p-4 text-white gap-10">
        {LokasiBankSampah.map((t) => (
          <Link
            className="w-full h-[50px] bg-custom-dark shadow-[0px_9px_14px_0px_#FF8D4D33] rounded-2xl text-background text-2xl uppercase text-center pt-2"
            href={`/lokasi/${t.id}`}
          >
            {t.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
