import { Initial_Parts } from "./Initial_parts";
import { Part } from "./Part";
function Sidebar() {
  return (
    <aside className=" bg-[#F6F8F9] mr-4 rounded-t-lg px-4 py-3 w-[220px] h-[calc(100vh-68px)] sticky top-[68px] xs:w-[145px]">
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
