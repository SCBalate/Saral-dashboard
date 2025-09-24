import React from "react";
import CopyButton from "../common/copyButton"; 
import EditIcon from "../../assets/icons/edit.svg"; 

const MyLinksAndCodes: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white rounded-xl divide-y divide-neutral-200 shadow-md shadow-neutral-100">
      {/* Header */}
      <div className="flex items-center justify-between gap-1 p-6 pb-4">
        <p className="text-lg text-neutral-700 font-medium">My Links & Codes</p>
      </div>

      {/* Tracking Link */}
      <div className="flex flex-col gap-2 p-6 pb-8">
        <p className="text-sm text-zinc-600 font-normal">Tracking Link :</p>
        <CopyButton link="ds&durga.trysaral.com/kimiko" />
      </div>

      {/* Coupon Code */}
      <div className="flex flex-col gap-2 p-6 pb-8">
        <p className="text-sm text-zinc-600 font-normal">Coupon Code :</p>
        <div className="flex items-center gap-1">
          <CopyButton link="KIMAYA10" />
          <button
            type="button"
            className="cursor-pointer rounded-md active:scale-95"
            aria-label="Edit coupon code"
          >
            <img src={EditIcon} alt="edit-icon" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyLinksAndCodes;
