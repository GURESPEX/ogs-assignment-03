import NewsCard from "@components/NewsCard";
import { data_new } from "@data/data_new";
import { Link, useParams } from "react-router-dom";
import { NewsType, TypeNew } from "types/type";

const AllNew = () => {
  const params = useParams();
  const newsId = params?.newsId;

  return (
    <div className="flex flex-col p-8 gap-8">
      {data_new[0].type_new
        .filter((tn: TypeNew) => {
          if (newsId) {
            return tn.id === parseInt(newsId);
          } else {
            return true;
          }
        })
        .map((tn: TypeNew) => (
          <div className="flex flex-col gap-4" key={tn.id}>
            <h2 className="text-3xl font-semibold border-l-4 pl-4 border-cyan-200">
              {tn.name}
            </h2>
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
              ))}
          </div>
        ))}
    </div>
  );
};

export default AllNew;
