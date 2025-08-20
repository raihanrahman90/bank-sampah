import React from "react";
import Header from "./header";

interface PageTemplateProps {
  title: string;
  image: string;
  children: React.ReactNode;
}

export default function PageTemplate({ title, image, children }: PageTemplateProps) {
  return (
    <div className="h-[100vh] bg-custom-primary">
      <Header title={title} image={image} />
      <div
        className="flex flex-col items-start justify-start w-full 
                   rounded-t-3xl p-4 text-white gap-10
                   max-w-[600px] mx-auto"
      >
        {children}
      </div>
    </div>
  );
}
