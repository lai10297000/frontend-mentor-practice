import React from "react";

const QRCard = () => {
  return (
    <div className="bg-[--color-white] rounded-[20px] shadow-lg pt-[16px] pb-[40px] px-[16px] text-center max-w-xs">
      <div className="rounded-[10px] overflow-hidden">
        <img
          src="/frontend-mentor-practice/qr-code-component/image-qr-code.png"
          alt="QR Code"
          className="w-full"
        />
      </div>
      <div className="mt-[24px]">
        <h1 className="font-bold text-[color:var(--color-slate-900)] text-[22px] leading-[cal(var(--font-size-lg)*1.2)] tracking-normal">
          Improve your front-end skills by building projects
        </h1>
        <p className="font-medium text-[color:var(--color-slate-500)] text-[size:var(--font-size-sm)] mt-4 leading-[cal(var(--font-size-sm)*1.4)] tracking-[0.2px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCard;