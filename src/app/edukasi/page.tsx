"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

export default function Home() {
  type SampahItem = {
    title: string;
    link: string;
  };

  const menu: SampahItem[] = [
    { title: "pengelolaan sampah", link: "" },
    { title: "pemanfaatan sampah", link: "" },
  ];

  // Pagination state

  return (
    <div className="h-[100vh] bg-custom-primary">
      <Header title="Edukasi" image="/images/edukasi.png" />

      <div className="flex flex-col items-center justify-start w-full rounded-t-3xl p-4 text-white gap-6 my-10 z-10 overflow-y-scroll h-[50vh]">
        {menu.map((t) => (
          <div className="w-full  max-w-[500px] h-fit rounded-2xl flex flex-col items-center gap-5" key={t.title}>
            <div className="w-full">
              <div className="font-semibold text-foreground text-sm w-2/5 shadow-[0px_9px_14px_0px_#FF8D4D33] h-full bg-custom-background rounded-2xl flex items-center justify-center uppercase px-3 py-3">
                {t.title}
              </div>
            </div>

            <div className="w-full max-w-2xl aspect-video h-fit z-10">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
