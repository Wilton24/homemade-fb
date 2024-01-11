import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import HeaderMiddleComponent from "./HeaderMiddleComponent";

export default function HeaderMiddle({ headerState }) {
  return (
    <div className="flex items-center justify-center gap-[20px]">
      <HeaderMiddleComponent
        image="profile-home.png"
        home="home"
        picture={true}
      />
      <HeaderMiddleComponent
        image="marketplace.png"
        home="marketplace"
        picture={true}
      />
      <HeaderMiddleComponent image="group.png" home="group" picture={true} />

      <div className="h-[55px] w-[111px] hover:cursor-pointer hover:bg-slate-600 hover:rounded-md flex items-center justify-center relative">
        <HeaderMiddleComponent icon={faGamepad} picture={false} />
      </div>
    </div>
  );
}
