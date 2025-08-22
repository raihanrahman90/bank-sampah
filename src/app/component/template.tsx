import React from "react";

interface PageTemplateProps {
  title: string;
  image: string;
  children: React.ReactNode;
}

export default function PageTemplate({ title, image, children }: PageTemplateProps) {
  return (
    <div className="h-[100vh] bg-custom-primary max-w-[450px] mx-auto overflow-hidden bg-cover bg-center">
      <div className="relative w-full sm:h-[15vh] h-[20vh] mb-[-40px] md:mb-0 bg-[url('/images/header-background.svg')] bg-cover bg-center">
        <div className="max-w-[550px] relative mx-auto">
          <div className="w-[80%] absolute top-5 left-5 z-10 ">
            <h1
              className="z-10 text-[#3B6958] font-semibold sm:text-3xl uppercase break-words"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
          </div>

          {image && image.trim() !== "" && (
            <div className="aspect-square md:h-20 sm:h-25 h-15 rounded-full overflow-hidden bg-custom-background md:right-[10%] sm:right-10 sm:top-10 right-5 top-5 absolute shadow-[0px_4px_4px_0px_#00000040] sm:p-5">
              <img src={image} alt="gambar halaman" className="h-full" />
            </div>
          )}
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-start w-full 
                   rounded-t-3xl p-4 text-white gap-10 mx-auto relative sm:h-[85vh] h-[85vh]"
      >
        {children}
      </div>
    </div>
  );
}
