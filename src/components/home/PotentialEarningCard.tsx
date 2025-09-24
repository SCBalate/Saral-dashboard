import React, { useState } from "react";
import CustomRange from "../common/customRange/customRange";
import InfoIcon from "../../assets/icons/Info Circle.svg";

const PotentialEarningsCard: React.FC = () => {
  const [posts, setPosts] = useState<number>(1);

 

  return (
    <div className="w-full  bg-white rounded-xl shadow-md p-5">
      {/* Header */}
      <div className="flex justify-between items-start mb-1">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium poppins text-[18px] text-gray-800">
              Potential Earnings
            </h2>
            {/* Info icon placeholder */}
            <span className="text-gray-400 text-sm cursor-pointer"><img src={InfoIcon} alt="info" /></span>
          </div>
          <p className="text-sm text-gray-500">
            How much you might earn with more posts!
          </p>
        </div>

        {/* Earnings value */}
        <div className="text-right flex items-center shadow-2xl border-b  border-neutral-200 ">
          <p className="text-xl font-semibold text-gray-300 text-opacity-50">$ 0</p>
        </div>
      </div>

      {/* Range labels */}
      <div className="flex justify-between text-sm text-gray-500 mt-6 mb-2">
        <span>{posts} Post</span>
        <span>15 Posts</span>
      </div>

      
      <CustomRange value={posts} setValue={setPosts}/>
    </div>
  );
};

export default PotentialEarningsCard;
