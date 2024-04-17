import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  to: string;
  pathHighlight?: boolean;
  color?: boolean;
  children: ReactNode;
}

const Button = ({ to, pathHighlight = false, color, children }: Props) => {
  const { pathname } = useLocation();
  return (
    <Link to={to}>
      <button
        className={`px-4 py-2 rounded transition ${
          color ? `bg-slate-900 hover:bg-slate-800 active:bg-slate-700` : ""
        } font-semibold ${
          pathHighlight
            ? `${
                to === pathname ? "text-cyan-500" : "text-white"
              } hover:text-cyan-400 active:text-cyan-500`
            : "text-white"
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
