import HomeLayout from "@layouts/HomeLayout";
import AllNews from "@pages/AllNew";
import HomePage from "@pages/HomePage";
import DetailNew from "@pages/DetailNew";
import NotFound from "@pages/NotFound";
import MainPage from "@pages/MainPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    index: true,
    element: <MainPage />,
  },
  {
    path: "site",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "news",
        element: <AllNews />,
      },
      {
        path: "news/:newsId",
        element: <AllNews />,
      },
      {
        path: "news/:newsId/:newsDetailId",
        element: <DetailNew />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
