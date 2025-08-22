"use client";
import { useParams } from "next/navigation";
import PageTemplate from "banksampah/app/component/template";
import LokasiBankSampah from "../data";

export default function LokasiPage() {
  const params = useParams();
  const id = Number(params.id); // convert to int
  const data = LokasiBankSampah[id - 1];
  return (
    <PageTemplate title="Lokasi bank sampah" image="/images/lokasi.svg">
      <div className="px-5 w-full">
        <div className="bg-custom-background p-2 py-4 mb-5 rounded-3xl mt-5 shadow-[0px_9px_14px_0px_#FF8D4D33] z-20">
          <h3 className="text-md text-custom-secondary leading-none font-bold text-center uppercase">{data.name}</h3>
        </div>
        <iframe src={data.url} height="250" loading="lazy" className="w-full mt-[-10px] z-0"></iframe>
      </div>
      <div className="flex flex-col items-start justify-start w-full rounded-3xl p-4 bg-custom-background text-foreground uppercase">
        <div className="flex items-center gap-2">
          <img src="/images/lokasi-bank-sampah-schedule.svg" className="w-[100px]" />
          <div>:</div>
          <div>{data.schedule}</div>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/lokasi-bank-sampah-contact.svg" className="w-[100px]" />
          <div>:</div>
          <div>{data.contact}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[100px] flex items-center justify-center">
            <img src="/images/lokasi-bank-sampah-location.svg" className="w-[80px]" />
          </div>
          <div>:</div>
          <div>{data.address}</div>
        </div>
      </div>
    </PageTemplate>
  );
}
