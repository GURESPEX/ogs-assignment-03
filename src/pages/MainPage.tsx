import Button from "@components/Button";
import welcome from "@assets/welcome.svg";
import { pageTransition } from "@transitions/transitions";

const MainPage = () => {
  return pageTransition(
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <div className="flex flex-col items-center h-full">
        <div className="container p-8 h-full">
          <div className="flex flex-col gap-8 p-8 h-full justify-center items-center">
            <img src={welcome} alt="Welcome" />
            <div className="text-xl font-semibold">OGS Daily News</div>
            <Button to="/site" color={true}>
              เข้าสู่เว็ปไซต์
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
