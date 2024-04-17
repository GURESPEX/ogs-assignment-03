import { NewsType } from "types/type";

interface Props {
  nt: NewsType;
}

const NewsCard = ({ nt }: Props) => {
  return (
    <div className="flex flex-col p-4 gap-2 border rounded hover:bg-slate-50 active:bg-slate-100 transition">
      <div className="text-sm text-slate-400 font-semibold">{nt.date}</div>
      <h3 className="text-xl font-semibold">{nt.headline}</h3>
      <div className="line-clamp-3">{nt.content}</div>
      <div className="text-sm text-slate-400 font-semibold">
        ประเภทข่าว : {nt.category}
      </div>
    </div>
  );
};

export default NewsCard;
