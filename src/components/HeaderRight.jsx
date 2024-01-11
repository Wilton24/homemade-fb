import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import profilePic from "/profile-pic.png";
import HeaderRightComponent from "./HeaderRightComponent";

export default function HeaderRight() {
  return (
    <ul className="flex items-center gap-5">
      <HeaderRightComponent icon={faBars} />
      <li className="list-none">
        <button className="h-11 bg-slate-500 hover:cursor-pointer hover:bg-slate-600 w-11 rounded-full">
          {" "}
          <a href="">
            <FontAwesomeIcon icon={faFacebookMessenger} className="h-5" />
          </a>
        </button>
      </li>
      <li className="list-none">
        <button className="h-11 bg-slate-500 hover:cursor-pointer hover:bg-slate-600 w-11 rounded-full">
          {" "}
          <a href="">
            <FontAwesomeIcon icon={faBell} className="h-5" />
          </a>
        </button>
      </li>
      <li className="list-none">
        <button className="h-11">
          {" "}
          <a href="">
            <img className="h-12 rounded-full" src={profilePic} alt="" />
          </a>
        </button>
      </li>
    </ul>
  );
}
