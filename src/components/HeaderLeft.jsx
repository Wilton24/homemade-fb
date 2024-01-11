import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function HeaderLeft({
  searchBarIsActive,
  setSearchBarIsActive,
}) {
  const searchLogo = useRef();

  function toggleSearch() {
    setSearchBarIsActive((prevState) => !prevState);
  }

  return (
    <>
      {!searchBarIsActive ? (
        <div className="flex w-100 items-center justify-start mr-12 ml-5r">
          <img
            src="logo.png"
            className="w-[170px] mr-2 h-11 hover:cursor-pointer"
            alt="SocialBook logo makens"
          />
          <img
            src="search.png"
            alt="Search"
            ref={searchLogo}
            onClick={toggleSearch}
          />
        </div>
      ) : (
        <div className="flex gap-3">
          <button className="h-10 w-10 hover:bg-slate-700 rounded-full">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="h-5 w-5 text-slate-200"
              onClick={toggleSearch}
            />
          </button>
          <input
            type="text"
            className="h-10 w-[270px] bg-slate-600 rounded-2xl outline-none px-3 text-md text-slate-100"
            placeholder="Search Pipol"
          />
        </div>
      )}
    </>
  );
}
