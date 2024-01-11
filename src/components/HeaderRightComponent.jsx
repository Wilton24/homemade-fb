import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderRightComponent({ icon }) {
  return (
    <li className="list-none">
      <button className="h-11 bg-slate-500 hover:cursor-pointer hover:bg-slate-600 w-11 rounded-full">
        <a href="">
          <FontAwesomeIcon icon={icon} className="h-5" />
        </a>
      </button>
    </li>
  );
}
