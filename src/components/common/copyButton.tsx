import { useState } from "react";
import CopyIcon from "../../assets/icons/copy.svg";
import cn from "clsx";

const CopyButton = ({ link }: { link: string }) => {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = () => {
      navigator.clipboard.writeText(link);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    };  
   return (
       <div className="border border-dashed border-violet-200  rounded active:scale-95 flex items-center justify-between gap-1 px-2.5 py-2">
         <p className="text-sm !font-fira-code text-violet-600 font-regular underline decoration-violet-600">
           {link}
         </p>
         <button
           className="cursor-pointer rounded-md active:scale-95"
           onClick={handleCopy}
         >
           <img
             src={CopyIcon}
             alt="copy-icon"
             className={cn("size-5", isCopied && "hidden")}
           />
         </button>
       </div>
     );
   };
export default CopyButton;