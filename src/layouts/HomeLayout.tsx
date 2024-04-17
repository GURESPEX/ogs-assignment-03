import Logo from "@assets/react.svg";
import { Outlet, Link, useLocation } from "react-router-dom";
import { data_new } from "@data/data_new";
import { TypeNew } from "types/type";
import Button from "@components/Button";
import { AnimatePresence } from "framer-motion";
import { pageTransition } from "@transitions/transitions";

const HomeLayout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <div className="flex flex-col items-center bg-cyan-800 drop-shadow-sm">
        <nav className="container p-8">
          <ul className="flex flex-row items-center gap-8 font-semibold">
            <li>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </li>
            <li>
              <Button pathHighlight={true} to="/site">
                หน้าแรก
              </Button>
            </li>
            <li>
              <Button pathHighlight={true} to="/site/news">
                ข่าวทั้งหมด
              </Button>
            </li>
            {data_new[0].type_new.map((tn: TypeNew) => (
              <li key={tn.id}>
                <Button pathHighlight={true} to={`/site/news/${tn.id}`}>
                  {tn.name}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center overflow-auto no-scrollbar">
        <div className="container">
          <AnimatePresence key={location.pathname}>
            {pageTransition(<Outlet />)}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
