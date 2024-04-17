import { useParams, useSearchParams } from "react-router-dom";
import { data_new } from "@data/data_new";
import { NewsType, TypeNew } from "types/type";

const DetailNew = () => {
  const { newsId, newsDetailId } = useParams();

  const newsDetail: NewsType = data_new[0].type_new
    .filter((tn: TypeNew) => {
      if (newsId) {
        if (tn.id === parseInt(newsId)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    })[0]
    .news_type.filter((nt: NewsType) => {
      if (newsDetailId) {
        if (nt.id === parseInt(newsDetailId)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    })[0];

  const [searchParams] = useSearchParams();

  return (
    <div className="flex flex-col p-8 gap-8">
      <div className="flex flex-row justify-end">
        ผู้เข้าชม : {searchParams.get("viewer")}
      </div>
      <h2 className="text-3xl font-bold">รายละเอียด{newsDetail.headline}</h2>
      <div className="flex flex-col gap-2 p-8 border rounded">
        <div>รหัสข่าว : {newsDetail.id}</div>
        <div>วันที่ลงข่าว : {newsDetail.date}</div>
        <div>เวลาที่ลงข่าว : {newsDetail.time}</div>
        <div>หัวข้อข่าว : {newsDetail.headline}</div>
        <div>เนื้อหาข่าว : {newsDetail.content}</div>
        <div>ประเภทข่าว : {newsDetail.category}</div>
        <div>สำนักข่าว : {newsDetail.publisher}</div>
      </div>
    </div>
  );
};

export default DetailNew;
