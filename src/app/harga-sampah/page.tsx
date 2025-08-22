"use client";
import { useState } from "react";
import Footer from "../component/footer";
import PageTemplate from "../component/template";

export default function Home() {
  type SampahItem = {
    title: string;
    price: number;
    satuan?: string;
  };

  const menu: SampahItem[] = [
    { title: "kardus", price: 1100, satuan: "kg" },
    { title: "Duplek", price: 500, satuan: "kg" },
    { title: "arsip (hvs) putih", price: 1500, satuan: "kg" },
    { title: "buku cetak bersih tnapa kulit", price: 1300, satuan: "kg" },
    { title: "besi", price: 2500, satuan: "kg" },
    { title: "rongsok", price: 1500, satuan: "kg" },
    { title: "kaleng", price: 1800, satuan: "kg" },
    { title: "alma panci", price: 14000, satuan: "kg" },
    { title: "seng", price: 1800, satuan: "kg" },
    { title: "pet bening mix + blues", price: 4500, satuan: "kg" },
    { title: "pet biru mix", price: 4000, satuan: "kg" },
    { title: "pet bening", price: 6500, satuan: "kg" },
    { title: "pet warna", price: 1000, satuan: "kg" },
    { title: "lasegar", price: 800, satuan: "kg" },
    { title: "ember warna", price: 1200, satuan: "kg" },
    { title: "aqua gelas a", price: 4000, satuan: "kg" },
    { title: "aqua gelas b", price: 3000, satuan: "kg" },
    { title: "kerasan/hitaman", price: 1000, satuan: "kg" },
    { title: "mounte/ale-ale", price: 2000, satuan: "kg" },
    { title: "p. campur", price: 1200, satuan: "kg" },
    { title: "jelantah", price: 3000, satuan: "kg" },
    { title: "multilayer", price: 500 },
    { title: "beling/kaca", price: 120 },
    { title: "karung pp", price: 800 },
    { title: "karung pet", price: 150 },
    { title: "botol infes lpde", price: 3000 },
    { title: "jerigen hemodialisa hpde", price: 2000 },
    { title: "spruit pp", price: 800, satuan: "kg" },
    { title: "botol kemasan b3", price: 1000, satuan: "kg" },
    { title: "tutup galon", price: 2000, satuan: "kg" },
    { title: "tabung gas", price: 150000 },
    { title: "tali plastik", price: 470, satuan: "kg" },
    { title: "sepatu bekas", price: 220 },
    { title: "sepatu safety bekas", price: 2500 },
    { title: "plastik mika", price: 290, satuan: "kg" },
    { title: "pvc & banner spanduk", price: 200 },
    { title: "sedotan/pipet", price: 700 },
    { title: "mainan", price: 750, satuan: "kg" },
    { title: "pcv tv", price: 3000, satuan: "kg" },
    { title: "kabel", price: 500, satuan: "kg" },
    { title: "koran", price: 1800, satuan: "kg" },
    { title: "kornis roll", price: 200, satuan: "kg" },
    { title: "filter bakteri sanitasi", price: 200000 },
    { title: "baju bekas", price: 120, satuan: "kg" },
    { title: "ban bekas", price: 130 },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(menu.length / itemsPerPage);

  // Get items for current page
  const pagedMenu = menu.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <PageTemplate title="Harga Sampah" image="/images/harga-sampah.png">
      <div className="flex flex-col items-start justify-start w-full rounded-t-3xl p-4 text-white gap-6 my-10">
        {pagedMenu.map((t) => (
          <div className="w-full h-[50px] rounded-2xl flex items-center" key={t.title}>
            <div className="mx-auto text-center font-semibold text-foreground text-sm w-2/5 shadow-[0px_9px_14px_0px_#FF8D4D33] h-full bg-custom-background rounded-2xl flex items-center justify-center uppercase px-3">
              {t.title}
            </div>

            <div className="ml-auto text-center font-semibold text-sm w-2/5 shadow-[0px_9px_14px_0px_#FF8D4D33] h-full bg-custom-bright text-background flex items-center justify-center rounded-2xl">
              Rp. {t.price}/{t.satuan ?? "satuan"}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center gap-3 mt-5 z-10 mx-auto">
        <button
          className="px-10 py-5 rounded bg-custom-bright z-10 font-bold text-background hover:cursor-pointer"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Kembali
        </button>
        <span className="px-3 py-1 z-10">
          {currentPage} / {totalPages}
        </span>
        <button
          className="px-3 py-1 rounded bg-custom-bright z-10 font-bold text-background hover:cursor-pointer"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Selanjutnya
        </button>
      </div>
      <Footer />
    </PageTemplate>
  );
}
