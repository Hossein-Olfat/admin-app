import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Modal_header } from "./Modalbox_header";
function Header() {
  return (
    <header className=" w-full h-16 bg-[#fdfdfd] sticky top-0 z-10">
      <section className=" flex justify-between py-3 items-center flex-wrap px-4">
        <div className=" flex justify-center items-center text-3xl text-[#1e1e87] font-bold mr-16">
          <h1 className=" mr-1">My Panel</h1>
          <IoMdHeart />
        </div>

        <div className="">
          <div className="flex items-center xs:hidden gap-4">
            <div className="relative">
              <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
              <span className="absolute text-white rounded-[50%] bg-[#e52d2d] text-[10px] flex justify-center items-center right-[-6px] top-[-7px] w-[20px] h-[19px]">
                2
              </span>
            </div>
            <div className="relative">
              <MdLanguage className=" text-2xl cursor-pointer" />
              <span className="absolute text-white rounded-[50%] bg-[#e52d2d] flex justify-center items-center right-[-6px] top-[-7px] text-[10px] w-[20px] h-[19px]">
                3
              </span>
            </div>
            <div className="relative">
              <IoMdSettings className="text-2xl cursor-pointer" />
              <span></span>
            </div>
            <div className=" cursor-pointer relative">
              <img
                className=" rounded-[50%]"
                width={"40px"}
                src="../public/images/profile.jpg"
              />
            </div>
          </div>
          <Modal_header />
        </div>
      </section>
    </header>
  );
}
//text-[#363636]
export { Header };
