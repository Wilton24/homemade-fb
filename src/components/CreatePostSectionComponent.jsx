export default function CreatePostSectionComponent({ img, label }) {
  return (
    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-600">
      <img src={img} alt="Live video Icon" className="h-7" />
      <span className="text-slate-50 text-lg font-semibold">{label}</span>
    </div>
  );
}
