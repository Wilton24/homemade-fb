import { useState } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderMiddle from "./HeaderMiddle";
import HeaderRight from "./HeaderRight";

export default function Header() {
  const [headerState, setHeaderState] = useState("home");
  const [searchBarIsActive, setSearchBarIsActive] = useState(false);

  return (
    <header className="flex items-center justify-between h-[74px] bg-[#1c1e21] w-full px-8 border-b-[white] mb-4">
      <HeaderLeft
        searchBarIsActive={searchBarIsActive}
        setSearchBarIsActive={setSearchBarIsActive}
      />
      <HeaderMiddle headerState={headerState} />
      <HeaderRight />
    </header>
  );
}
