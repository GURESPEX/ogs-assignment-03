import NewsCard from "@components/NewsCard";
import { data_new } from "@data/data_new";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NewsType, TypeNew } from "types/type";

const AllNew = () => {
  const params = useParams();
  const navigate = useNavigate();
  const newsId = params?.newsId;

  useEffect(() => {
    const foundedTypeIndex = data_new[0].type_new.findIndex(
      (tn: TypeNew) => tn.id === parseInt(newsId as string)
    );
    if (newsId !== undefined && foundedTypeIndex < 0) {
      navigate("/error/404");
    }
  });

  return (
    <div className="flex flex-col p-8 gap-16">
      {!newsId && (
        <div className="flex flex-row justify-end font-semibold">
          รวมข่าวทั้งหมด
        </div>
      )}
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
