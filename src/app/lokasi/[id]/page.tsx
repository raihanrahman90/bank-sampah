import Header from "../../component/header";
import LokasiBankSampah from "../data";

export default function LokasiPage({ params }) {
  const { id } = params;
  const data = LokasiBankSampah[id];

  return (
    <div className="h-[100vh] bg-custom-primary">
      <Header title="Lokasi bank sampah" image="/images/lokasi.png" />
      <div className="px-5">
        <div className="bg-custom-background p-2 py-4 mb-5 rounded-3xl mt-5 shadow-[0px_9px_14px_0px_#FF8D4D33]">
          <h3 className="text-md text-custom-secondary leading-none font-bold text-center">NAMA NAMA BANK SAMPAH</h3>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full rounded-t-3xl p-4 text-white gap-10"></div>
    </div>
  );
}
