import story1 from "../assets/bodyMidReels/member-2.png";

export default function BodyMidReels() {
  return (
    <div className="px-7 bg-slate-700 my-2">
      <ul className="flex">
        <li className="card-container h-[250px] w-[140px] bg-slate-300 rounded-2xl py-3 mx-1 overflow-hidden relative">
          <img
            src={story1}
            alt="story 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute w-10 top-4 left-4 h-10 rounded-full bg-blue-600 p-1 overflow-hidden">
            <img
              src={story1}
              alt="Profile pic of the story uploader"
              className="contain h-full w-full rounded-full"
            />
          </div>
          <span className="block absolute bottom-4 left-4">Profile name</span>
        </li>

        <li className="card-container h-[250px] w-[140px] bg-slate-300 rounded-2xl py-3 mx-1"></li>
        <li className="card-container h-[250px] w-[140px] bg-slate-300 rounded-2xl py-3 mx-1"></li>
        <li className="card-container h-[250px] w-[140px] bg-slate-300 rounded-2xl py-3 mx-1"></li>
      </ul>
    </div>
  );
}
