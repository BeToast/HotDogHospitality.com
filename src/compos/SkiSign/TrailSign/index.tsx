import React from "react";
import { arrow, diamond, doubleDiamond, square } from "../../../assets/svgs";
import "./style.css";

export type Difficulty = "intermediate" | "expert" | "double-diamond";

interface TrailSignProps {
   title: string;
   isOpen: boolean;
   onToggle: () => void;
   difficulty: Difficulty;
   children: React.ReactNode;
}

const TrailSign: React.FC<TrailSignProps> = ({
   title,
   isOpen,
   onToggle,
   children,
   difficulty,
}) => {
   const getDifficultySymbol = (diff: Difficulty) => {
      const symbols = {
         intermediate: square,
         expert: diamond,
         "double-diamond": doubleDiamond,
      }[diff];

      return symbols || null;
   };

   return (
      <div
         className={`trail-sign-content w-full shadow-lg ${
            difficulty === "intermediate" ? "bg-blue-900" : "bg-black"
         }`}
      >
         <div
            onClick={onToggle}
            className={`w-full flex text-white items-center ${
               difficulty === "intermediate" ? "bg-blue-900" : "bg-black"
            }`}
         >
            <div className="w-16 h-16 bg-white flex justify-center content-center">
               <span
                  className={` w-full h-full p-2 ${
                     difficulty === "intermediate"
                        ? "text-blue-900"
                        : "text-black"
                  }`}
               >
                  {getDifficultySymbol(difficulty)}
               </span>
            </div>
            <span className="font-europa-medium text-5xl mt-1 pl-4">
               {title}
            </span>
            <div className="grow flex justify-end">
               <div
                  className=" transition-transform duration-200 w-16 h-16 p-3 fill-white"
                  style={{
                     transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
               >
                  {arrow}
               </div>
            </div>
         </div>
         <div
            className="transition-all duration-300"
            style={{
               maxHeight: isOpen ? "" : "0",
               overflow: "hidden",
            }}
         >
            <div className="bg-white">{children}</div>
         </div>
      </div>
   );
};

export default TrailSign;
