import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  children: ReactNode;
}

const Button = ({ to, children }: Props) => {
  return (
    <Link to={to}>
      <button className="px-4 py-2 border rounded transition bg-slate-900 hover:bg-slate-800 active:bg-slate-700 text-white font-semibold">
        {children}
      </button>
    </Link>
  );
};

export default Button;
