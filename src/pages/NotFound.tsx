import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      ERROR 404
      <Link to="/site">Back to Home</Link>
    </div>
  );
};

export default NotFound;
