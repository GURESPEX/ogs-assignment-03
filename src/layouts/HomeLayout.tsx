import Logo from "@assets/react.svg";
import { Outlet, Link, useLocation } from "react-router-dom";
import { data_new } from "@data/data_new";
import { TypeNew } from "types/type";

const HomeLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <div className="flex flex-col items-center bg-slate-200 border-b border-slate-300">
        <nav className="container p-8">
          <ul className="flex flex-row items-center gap-8 font-semibold">
            <li>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  "/site" === pathname ? "text-cyan-400" : "text-black"
                } transition hover:text-cyan-600 active:text-cyan-400`}
                to="/site"
              >
                <button className="flex flex-row px-4 py-2">หน้าแรก</button>
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  "/site/news" === pathname ? "text-cyan-400" : "text-black"
                } transition hover:text-cyan-600 active:text-cyan-400`}
                to="/site/news"
              >
                <button className="flex flex-row px-4 py-2">ข่าวทั้งหมด</button>
              </Link>
            </li>
            {data_new[0].type_new.map((tn: TypeNew) => (
              <li key={tn.id}>
                <Link
                  className={`${
                    `/site/news/${tn.id}` === pathname
                      ? "text-cyan-400"
                      : "text-black"
                  } transition hover:text-cyan-600 active:text-cyan-400`}
                  to={`/site/news/${tn.id}`}
                >
                  <button className="flex flex-row px-4 py-2">{tn.name}</button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center overflow-auto no-scrollbar">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
