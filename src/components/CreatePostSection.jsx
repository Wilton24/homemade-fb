import profilePic from "/profile-pic.png";
import liveVideoIcon from "/video-solid.svg";
import photoOrVideoIcon from "/photo-film-solid.svg";
import feelingOrActivityIcon from "/face-laugh-solid.svg";
import CreatePostSectionComponent from "./CreatePostSectionComponent";

export default function CreatePostSection() {
  return (
    <section className="flex-col p-3 mx-7 my-11 bg-slate-800 opacity-95 rounded-lg">
      <div className="flex w-full items-center mb-3">
        <img
          src={profilePic}
          alt="Profile picture"
          className="h-10 rounded-full me-2"
        />

        <input
          type="text"
          placeholder="What's on your mind, {NameVar}?"
          className="border-none w-full rounded-2xl px-2 text-[white] h-10 text-xl outline-none bg-slate-700 opacity-70"
        />
      </div>

      <div className="w-full flex justify-around p-2 border-t-[.5px] pt-3 border-slate-100">
        <CreatePostSectionComponent img={liveVideoIcon} label="Live Video" />
        <CreatePostSectionComponent
          img={photoOrVideoIcon}
          label="Photo/Video"
        />
        <CreatePostSectionComponent
          img={feelingOrActivityIcon}
          label="Feeling/Activity"
        />
      </div>
    </section>
  );
}
