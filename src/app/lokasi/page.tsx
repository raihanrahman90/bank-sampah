import Image from "next/image";
import Header from "../component/header";
import LokasiBankSampah from "./data";
import Link from "next/link";
import PageTemplate from "../component/template";

export default function Home() {
  return (
    <PageTemplate title="Lokasi Bank Sampah" image="/images/lokasi.svg">
      <div className="bg-custom-background w-full p-2 py-4 mb-5 rounded-3xl mt-5 shadow-[0px_9px_14px_0px_#FF8D4D33] px-5">
        <h3 className="text-md text-custom-secondary leading-none font-bold text-center">NAMA NAMA BANK SAMPAH</h3>
      </div>
      <div className="flex flex-col items-start justify-start w-full rounded-t-3xl p-4 text-white gap-10 overflow-y-scroll h-[60vh]">
        {LokasiBankSampah.map((t) => (
          <Link
            className="w-full h-[50px] bg-custom-bright shadow-[0px_9px_14px_0px_#FF8D4D33] rounded-2xl text-background text-2xl uppercase text-center pt-2"
            href={`/lokasi/${t.id}`}
          >
            {t.name}
          </Link>
        ))}
      </div>
    </PageTemplate>
  );
}
