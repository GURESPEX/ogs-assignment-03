import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  to: string;
  pathHighlight?: boolean;
  color?: "slate" | "cyan";
  children: ReactNode;
}

const Button = ({ to, pathHighlight = false, color, children }: Props) => {
  const { pathname } = useLocation();
  return (
    <Link to={to}>
      <button
        className={`px-4 py-2 rounded transition ${
          color
            ? `bg-${color}-900 hover:bg-${color}-800 active:bg-${color}-700`
            : ""
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
