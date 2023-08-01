import { useContext } from "react";
import { Header_modal_context } from "../../modal_Context";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
function Modal_header() {
  const ourHeader_modal = useContext(Header_modal_context);
  return (
    <div
      className={` transition-all fixed right-8 top-14 shadow ${
        ourHeader_modal[0] === "close"
          ? " w-0 p-0 text-[0px]"
          : "w-[200px] py-2 z-[999]"
      } bg-white  rounded-lg`}
    >
      <div className=" flex flex-col gap-3 relative my-6">
        <div className=" flex items-center justify-between px-5 transition-all hover:bg-slate-200 cursor-pointer">
          <img
            className=" rounded-[50%]"
            width={"36px"}
            src="/images/profile.jpg"
          />
          <span>Hossein Olfat</span>
        </div>
        <div className=" flex justify-between items-center px-5 transition-all hover:bg-slate-200 cursor-pointer">
          <IoMdNotificationsOutline
            className={`${
              ourHeader_modal[0] === "close" ? "text-[0px]" : " text-[1.5rem]"
            } cursor-pointer`}
          />
          <span>2 Notif</span>
        </div>
        <div className=" flex justify-between items-center px-5 transition-all hover:bg-slate-200 cursor-pointer">
          <MdLanguage
            className={`${
              ourHeader_modal[0] === "close" ? "text-[0px]" : " text-[1.5rem]"
            } cursor-pointer`}
          />
          <span> 3 news</span>
        </div>
        <div className=" flex justify-between items-center px-5 transition-all hover:bg-slate-200 cursor-pointer">
          <IoMdSettings
            className={`${
              ourHeader_modal[0] === "close" ? "text-[0px]" : " text-[1.5rem]"
            } cursor-pointer`}
          />
          <span>setting</span>
        </div>
      </div>
      <div className=" absolute top-1 right-1">
        <IoIosClose
          onClick={(e) => {
            e.stopPropagation();
            ourHeader_modal[1]("close");
          }}
          className={`${
            ourHeader_modal[0] === "close"
              ? "text-[0px]"
              : "text-2xl cursor-pointer"
          }`}
        />
      </div>
    </div>
  );
}
export { Modal_header };
