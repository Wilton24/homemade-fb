import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderMiddleComponent({ image, title, icon, picture }) {
  return (
    <div className="h-[55px] w-[111px] hover:cursor-pointer hover:bg-slate-600 hover:rounded-md flex items-center justify-center relative">
      {picture ? (
        <img className="h-6" src={image} alt={`${title} logo`} />
      ) : (
        <FontAwesomeIcon icon={icon} className="h-5" />
      )}
    </div>
  );
}
