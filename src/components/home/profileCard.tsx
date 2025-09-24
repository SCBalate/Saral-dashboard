import React from "react";
import Avatar from "../../assets/images/avatar.webp";
import Envelop from "../../assets/icons/Envelope.svg";
import EditBasic from "../../assets/icons/editIcon.svg";


interface Card {
  id: number | string;
  bgColor: string;
  icon: string;
  label: string;
  value: string | number;
}

interface ProfileCardProps {
  name: string;
  email: string;
cards: Card[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, email, cards }) => {
  return (
    <div className="flex flex-col w-full bg-white rounded-xl shadow-md shadow-neutral-100">
      <div className="w-full h-1/2 flex items-center justify-center flex-col text-center gap-1">
        <img src={Avatar} alt="avatar" className="size-25" />
        <div className="w-full font-poppins font-medium text-[20px]">{name}</div>
        <div className="w-full flex justify-center items-center gap-1">
          <img src={Envelop} alt="Email" className="size-5" />
          <p className="text-sm text-zinc-600 poppins font-regular text-[16px]">{email}</p>
          <img src={EditBasic} alt="Edit" className="size-5" />
        </div>
      </div>

      <div className="w-full gap-2 flex h-1/2 p-4">
        <div className="grid grid-cols-2 gap-4 w-full">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex items-center gap-3 p-3 border border-neutral-200 rounded-xl h-full"
            >
              <div
                className={`flex items-center justify-center ${card.bgColor} w-16 h-16 rounded-full`}
              >
                <img src={card.icon} alt={card.label} className="size-8" />
              </div>
              <div>
                <p className="text-[22px] poppins font-medium">{card.value}</p>
                <p className="text-[16px] text-zinc-600 poppins font-regular">{card.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
