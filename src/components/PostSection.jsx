import myProfile from "/my-profile.jpeg";
import threeDots from "/ellipsis-solid.svg";
import x from "/x-solid.svg";
import earth from "/earth-americas-solid.svg";
import post1 from "/post-1.png";
import heartIcon from "/heart-solid.svg";
import woahIcon from "/face-surprise-solid.svg";
import likeIcon from "/thumbs-up-solid.svg";
import comment from "/comment-solid.svg";
import share from "/share-solid.svg";
import UserProfile from "./ui/UserProfile";

export default function PostSection() {
  return (
    <div className="bg-slate-800 mx-7 rounded-lg">
      <div className="header flex justify-between items-center p-3 gap-1">
        <div className="w-11 flex-none">
          <UserProfile dimension={10} />
        </div>
        <div className="grow">
          <span className="font-bold text-slate-50 text-lg">
            John Chester Amador
          </span>
          <span className="block text-slate-400 text-lg">
            Upload date and world icon
            <img src={earth} alt="Earth Icon" className="inline-block ml-1" />
          </span>
        </div>
        <div className="rounded-full hover:bg-slate-700 cursor-pointer p-1">
          <img src={threeDots} alt="Ellipis icon" className="h-5 w-5" />
        </div>
        <div className="rounded-full hover:bg-slate-700 cursor-pointer p-1">
          <img src={x} alt="Close button icon" className="h-5 w-5" />
        </div>
      </div>

      <div className="flex-wrap px-7 m-2">
        <span className="text-wrap">Workout sesh everyday</span>
      </div>

      <div className="uploaded area">
        <div className="w-full">
          <img
            src={post1}
            alt="First feed post"
            className="object-cover w-full"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mx-5 mb-3 py-1">
        <div className="reactions flex gap-1 items-center">
          <span>
            <img src={heartIcon} alt="Heart Reaction Icon" />
          </span>
          <span>
            <img src={woahIcon} alt="Woah Reaction Icon" />
          </span>
          <span>
            <img src={likeIcon} alt="Like Reaction Icon" />
          </span>
          <p>John, Emmanuel, Brial, & etc.</p>
        </div>
        <div className="comment&share flex gap-1 items-center">
          <p>212</p>
          <span>
            <img src={comment} alt="Comment Icon" />
          </span>
          <p>73</p>
          <span>
            <img src={share} alt="Share Icon" />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-10 py-3 border-t-[1px] mx-4">
        <div className="flex gap-1 text-white hover:bg-slate-700 px-9 py-2 rounded-xl cursor-pointer">
          <img src={likeIcon} alt="Like Icon" />
          Like
        </div>
        <div className="flex gap-1 text-white hover:bg-slate-700 px-9 py-2 rounded-xl cursor-pointer">
          <img src={comment} alt="Comment Icon" />
          Comment
        </div>
        <div className="flex gap-1 text-white hover:bg-slate-700 px-9 py-2 rounded-xl cursor-pointer">
          <img src={share} alt="Share Icon" />
          Share
        </div>
      </div>
    </div>
  );
}
