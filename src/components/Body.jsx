import BodyLeft from "./BodyLeft";
import BodyMid from "./BodyMid";

export default function Body() {
  return (
    <div className="flex">
      <BodyLeft />
      <BodyMid />
    </div>
  );
}
