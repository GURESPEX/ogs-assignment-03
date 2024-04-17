import HomeLayout from "@layouts/HomeLayout";
import AllNews from "@pages/AllNew";
import HomePage from "@pages/HomePage";
import DetailNew from "@pages/DetailNew";
import NotFound from "@pages/NotFound";
import MainPage from "@pages/MainPage";
import { Route, Routes } from "react-router-dom";
const RouterComponent = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="site" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<AllNews />} />
        <Route path="news/:newsId" element={<AllNews />} />
        <Route path="news/:newsId/:newsDetailId" element={<DetailNew />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="*/*" element={<NotFound />} />
      <Route path="*/*/*" element={<NotFound />} />
      <Route path="*/*/*/*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterComponent;
