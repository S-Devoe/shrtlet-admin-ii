import React from "react";

export default function BurgerComponent({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="rounded-lg bg-orange p-2.5 cursor-pointer select-none"
      onClick={onClick}
    >
      <div className="w-6 h-6 py-0.5 flex flex-col gap-1 justify-center items-center">
        <span className="w-full h-0.5 rounded-sm shadow-sm bg-white"></span>
        <span className="w-full h-0.5 rounded-sm shadow-sm bg-white"></span>
        <span className="w-full h-0.5 rounded-sm shadow-sm bg-white"></span>
      </div>
    </div>
  );
}
