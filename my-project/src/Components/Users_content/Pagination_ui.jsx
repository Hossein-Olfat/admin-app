import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Pagination_ui({
  Start_slide,
  users,
  setpage_number,
  page_number,
  number_of_pages,
}) {
  return (
    <div className=" flex items-center justify-end gap-4 p-4">
      <div>
        <span>
          {Start_slide}-{users.length > Start_slide + 3 ? 4 : users.length} of{" "}
          {users.length}
        </span>
      </div>
      <div className="flex gap-4 text-xl">
        <button
          onClick={() => {
            setpage_number((prev) => {
              console.log("Hi");
              return prev - 1;
            });
          }}
          disabled={page_number === 0 ? true : false}
          className=" cursor-pointer"
        >
          <MdOutlineKeyboardArrowLeft
            className={` transition-all ${
              page_number === 0 ? "text-[rgb(224,224,224)]" : ""
            }`}
          />
        </button>
        <button
          onClick={() => {
            setpage_number((prev) => {
              console.log(page_number, number_of_pages);
              return prev + 1;
            });
          }}
          disabled={number_of_pages === page_number ? true : false}
          className=" cursor-pointer"
        >
          <MdOutlineKeyboardArrowRight
            className={` transition-all ${
              number_of_pages === page_number ? "text-[rgb(224,224,224)]" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}
export { Pagination_ui };
