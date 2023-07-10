import { useState } from "react";
import { Initial_Parts } from "./Initial_parts";
import { Part } from "./Part";
import { BsArrowLeftShort } from "react-icons/bs";

function Sidebar() {
  return (
    <aside
      className="transition-all bg-[#F6F8F9] mr-4 rounded-t-lg px-4 py-3  h-[calc(100vh-68px)] sticky top-[68px] 
        xss:w-[55px] w-[220px] xs:w-[145px] duration-300"
    >
      <section className=" h-full">
        {Initial_Parts.map((Eachpart) => {
          return (
            <Part
              key={Eachpart.id}
              title={Eachpart.title}
              Part_Childeren={Eachpart.childeren}
            />
          );
        })}
      </section>
    </aside>
  );
}
export { Sidebar };
