import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
function Modal_header() {
  const [modal, setmodal] = useState("close");
  return (
    <div className=" xs:block hidden relative">
      <div
        className={` transition-all absolute right-8 top-10 shadow ${
          modal === "close" ? " w-0 p-0 text-[0px]" : "w-[200px] py-2"
        } bg-white  rounded-lg`}
      >
        <div className=" flex flex-col gap-3 relative my-6">
          <div className=" flex items-center justify-between px-5 transition-all hover:bg-slate-200 py-1 cursor-pointer">
            <img
              className=" rounded-[50%]"
              width={"36px"}
              src="../public/images/profile.jpg"
            />
            <span>Hossein Olfat</span>
          </div>
          <div className=" flex justify-between items-center px-5 transition-all hover:bg-slate-200 py-1 cursor-pointer">
            <IoMdNotificationsOutline
              className={`${
                modal === "close" ? "text-[0px]" : " text-[1.5rem]"
              } cursor-pointer`}
            />
            <span>2 Notif</span>
          </div>
          <div className=" flex justify-between items-center px-5 transition-all hover:bg-slate-200 py-1 cursor-pointer">
            <MdLanguage
              className={`${
                modal === "close" ? "text-[0px]" : " text-[1.5rem]"
              } cursor-pointer`}
            />
            <span> 3 news</span>
          </div>
          <div className=" flex justify-between items-center px-5 transition-all hover:bg-slate-200 py-1 cursor-pointer">
            <IoMdSettings
              className={`${
                modal === "close" ? "text-[0px]" : " text-[1.5rem]"
              } cursor-pointer`}
            />
            <span>setting</span>
          </div>
        </div>
        <div className=" absolute top-1 right-1">
          <IoIosClose
            onClick={(e) => {
              e.bubbles = false;
              e.stopPropagation();
              setmodal("close");
            }}
            className={`${
              modal === "close" ? "text-[0px]" : "text-2xl cursor-pointer"
            }`}
          />
        </div>
      </div>
      <AiOutlineMenu
        onClick={(e) => {
          e.bubbles = false;
          console.log(e.currentTarget);
          e.stopPropagation();
          setmodal("open");
        }}
        className="text-2xl cursor-pointer"
      />
    </div>
  );
}
export { Modal_header };
