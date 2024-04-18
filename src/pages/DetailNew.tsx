import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { data_new } from "@data/data_new";
import { NewsType, TypeNew } from "types/type";
import { pageTransition } from "@transitions/transitions";
import { useEffect } from "react";

const DetailNew = () => {
  const { newsId, newsDetailId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundedTypeIndex = data_new[0].type_new.findIndex(
      (tn: TypeNew) => tn.id === parseInt(newsId as string)
    );
    if (newsId !== undefined && foundedTypeIndex < 0) {
      navigate("/error/404");
    } else {
      const foundedNewsDetailIndex = data_new[0].type_new[
        foundedTypeIndex
      ].news_type.findIndex(
        (nt: NewsType) => nt.id === parseInt(newsDetailId as string)
      );
      if (newsDetailId !== undefined && foundedNewsDetailIndex < 0) {
        navigate("/error/404");
      }
    }
  });

  const newsDetail: NewsType = data_new[0].type_new
    .filter((tn: TypeNew) => {
      if (newsId) {
        return tn.id === parseInt(newsId);
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

  return pageTransition(
    <div className="flex flex-col p-8 gap-16">
      <div className="flex flex-row justify-end font-semibold">
        ผู้เข้าชม : {searchParams.get("viewer")}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold border-l-4 pl-4 border-cyan-200">
          รายละเอียด{newsDetail?.headline}
        </h2>
        <div className="flex flex-col gap-2 p-8 border rounded drop-shadow-sm bg-white">
          <div>รหัสข่าว : {newsDetail?.id}</div>
          <div>วันที่ลงข่าว : {newsDetail?.date}</div>
          <div>เวลาที่ลงข่าว : {newsDetail?.time}</div>
          <div>หัวข้อข่าว : {newsDetail?.headline}</div>
          <div>เนื้อหาข่าว : {newsDetail?.content}</div>
          <div>ประเภทข่าว : {newsDetail?.category}</div>
          <div>สำนักข่าว : {newsDetail?.publisher}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailNew;
