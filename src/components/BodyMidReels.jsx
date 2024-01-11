import story1 from "../assets/bodyMidReels/story-1.png";
import { reels } from "../bodyData";
import BodyMidReel from "./BodyMidReel";
import angleLeft from "/angle-left-solid.svg";
import angleRight from "/angle-right-solid.svg";

export default function BodyMidReels() {
  return (
    <div className="bg-slate-700 my-2 flex justify-center">
      <ul className="flex relative">
        {reels.map((data, index) => {
          return <BodyMidReel reelData={data} key={index} />;
        })}
        <div className="absolute left-1 top-[50%] bg-slate-700 rounded-full w-11 h-11 opacity-90 flex items-center justify-center cursor-pointer hover:bg-slate-600">
          <img src={angleLeft} alt="Angle left icon" />
        </div>
        <div className="absolute right-1 top-[50%] bg-slate-700 rounded-full w-11 h-11 opacity-90 flex items-center justify-center cursor-pointer hover:bg-slate-600">
          <img src={angleRight} alt="Angle right icon" />
        </div>
      </ul>
    </div>
  );
}
