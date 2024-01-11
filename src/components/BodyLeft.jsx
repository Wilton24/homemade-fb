import profilePic from "/profile-pic.png";
import { bodyLeftData } from "../bodyData";
import BodyLeftComponents from "./BodyLeftComponents";

export default function BodyLeft() {
  return (
    <div className="flex-col ml-3 w-[350px]">
      <ul className="flex-col gap-2 items-baseline">
        {bodyLeftData.map((items, index) => {
          return <BodyLeftComponents items={items} key={index} />;
        })}
      </ul>
    </div>
  );
}
