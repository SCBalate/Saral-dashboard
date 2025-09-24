import React from "react";
import CardImage from "../../assets/images/card.webp"; 
import EditIcon from "../../assets/icons/edit.svg";   

const MyCommission: React.FC = () => {
  return (
    <div className="flex flex-col p-6 gap-4 w-full bg-white rounded-xl shadow-md shadow-neutral-100">
     
      <div className="flex items-center justify-between gap-1">
        <p className="text-lg text-neutral-700 font-medium">My Commission</p>
        <p className="text-sm text-zinc-600 font-normal">20% Commission</p>
      </div>

     
      <div className="w-full">
        <img
          src={CardImage}
          alt="Card"
          className="w-full max-w-[335px] aspect-[338/200] mx-auto"
        />
      </div>

     
      <div className="mt-1">
        <div className="flex items-center justify-between gap-1 rounded border border-neutral-200 p-2">
          <div className="flex items-center gap-1">
            <span className="bg-blue-500 select-none font-bold text-white rounded-xs w-5 h-5 flex items-center justify-center">
              T
            </span>
            <p className="text-zinc-600">
              Payment Email:{" "}
              <span className="text-neutral-800">N/A</span>
            </p>
          </div>

          <button
            type="button"
            className="cursor-pointer rounded-md active:scale-95"
            aria-label="Edit payment email"
          >
            <img src={EditIcon} alt="edit-icon" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCommission;
