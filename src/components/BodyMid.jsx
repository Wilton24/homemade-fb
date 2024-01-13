import BodyMidReels from "./BodyMidReels";
import PostSection from "./PostSection";
import CreatePostSection from "./createPostSection";

export default function BodyMid() {
  return (
    <div className="w-[650px] px-5 flex-col justify-center items-center bg-slate-300">
      <BodyMidReels />
      <CreatePostSection />
      <PostSection />
    </div>
  );
}
