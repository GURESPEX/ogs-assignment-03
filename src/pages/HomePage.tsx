import { data_new } from "@data/data_new";
import { Link } from "react-router-dom";
import { NewsType, TypeNew } from "types/type";
import NewsCard from "@components/NewsCard";
import { pageTransition } from "@transitions/transitions";

const HomePage = () => {
  return pageTransition(
    <div className="flex flex-col p-8 gap-8">
      <div className="flex flex-col p-8 gap-8 border rounded bg-cyan-200 border-cyan-300 text-cyan-800 drop-shadow-sm">
        <h1 className="text-3xl font-bold">{data_new[0].title}</h1>
        <hr className="border-cyan-300" />
        <div className="text-xl">{data_new[0].sub_title}</div>
      </div>
      {data_new[0].type_new.map((tn: TypeNew) => (
        <div className="flex flex-col gap-4" key={tn.id}>
          <h2 className="text-2xl font-semibold border-l-4 pl-4 border-cyan-200">
            ประเภทข่าว : {tn.name}
          </h2>
          <div className="flex flex-col gap-4">
            {tn.news_type
              .sort(
                (a: NewsType, b: NewsType) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((nt: NewsType) => (
                <Link
                  to={`/site/news/${tn.id}/${nt.id}?viewer=Natthanan`}
                  key={nt.id}
                >
                  <NewsCard nt={nt} />
                </Link>
              ))
              .splice(0, 2)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
