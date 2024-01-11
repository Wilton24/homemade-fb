export default function BodyMidReel({ reelData }) {
  return (
    <li className="card-container h-[250px] w-[140px] bg-slate-300 rounded-2xl py-3 mx-1 overflow-hidden relative">
      <img
        src={reelData.storyImg}
        alt="story 1"
        className="w-full h-full object-cover"
      />
      <div className="absolute w-10 top-4 left-4 h-10 rounded-full bg-blue-600 p-1 overflow-hidden">
        <img
          src={reelData.uploaderPic}
          alt="Profile pic of the story uploader"
          className="contain h-full w-full rounded-full"
        />
      </div>
      <span className="block absolute bottom-3 left-4 text-slate-50 font-bold">
        {reelData.name}
      </span>
    </li>
  );
}
