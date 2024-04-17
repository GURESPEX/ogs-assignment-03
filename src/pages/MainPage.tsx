import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <div>OGS Daily News</div>
      <Link to="/site">
        <button>เข้าสู่เว็ปไซต์</button>
      </Link>
    </div>
  );
};

export default MainPage;
