import React from "react";

const QRCard = ({ imageSrc, imageAlt, title, content }) => {
  return (
    <div className="flex flex-col gap-y-[24px] px-[16px] pt-[16px] pb-[40px] rounded-[20px] bg-[--color-white] shadow-[0_25px_25px_0_rgba(0,0,0,0.0477)]  text-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-[288px] rounded-[10px] overflow-hidden"
        />

      <div className="w-[288px] flex flex-col gap-y-[16px] px-4">
        <h1 className="font-bold text-[color:var(--color-slate-900)] text-[22px] leading-[1.2] tracking-normal">
          {title}
        </h1>
        <p className="text-[color:var(--color-slate-500)] text-[size:var(--font-size-sm)] leading-[1.4] tracking-[0.2px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default QRCard;