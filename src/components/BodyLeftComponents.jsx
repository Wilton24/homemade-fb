import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function BodyLeftComponents({ items }) {
  // const content = items.image ? (
  //   <img className="h-10 rounded-full" src={items.img} alt="" />
  // ) : (
  //   <img className="h-10 rounded-full" src={items.img} alt="" />
  // );
  return (
    <li>
      <div className="flex gap-2 h-11 px-2 items-center justify-start mb-3 rounded-md hover:bg-slate-600">
        <span>
          <img className="h-7 rounded-full" src={items.img} alt="" />
        </span>
        <span className="text-slate-50 font-bold text-[16px]">
          {items.label}
        </span>
      </div>
    </li>
  );
}
