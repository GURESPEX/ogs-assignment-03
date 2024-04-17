import Button from "@components/Button";
import error404 from "@assets/error404.svg";
import { pageTransition } from "@transitions/transitions";

const NotFound = () => {
  return pageTransition(
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <div className="flex flex-col items-center h-full">
        <div className="container p-8 h-full">
          <div className="flex flex-col gap-8 p-8 h-full justify-center items-center">
            <img src={error404} alt="Error 404" />
            <Button to="/site" color="slate">
              กลับสู่หน้าหลัก
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
