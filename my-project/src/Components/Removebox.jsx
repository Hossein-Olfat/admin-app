import { useNavigate } from "react-router-dom";

function Removebox({
  chosen,
  from,
  edititem = null,
  setedititem = null,
  setdatas,
  deletebox,
}) {
  const Navigate = useNavigate();

  return (
    <div
      className={` rounded-xl absolute ${
        from === "Users"
          ? "-top-[130%] right-[50px]"
          : from === "Products"
          ? " top-[10%] left-[10%]"
          : ""
      } z-30 bg-white  flex flex-col gap-4 items-center justify-evenly transition-all xss:right-[15px] ${
        deletebox[0] === chosen.id ? "w-[200px] p-3" : "w-[0px] text-[0px] p-0"
      }`}
    >
      <h1
        className={`w-full text-center duration-300 text-black ${
          deletebox[0] === chosen.id ? "text-2xl" : "text-[0px]"
        }`}
      >
        Are You Sure?
      </h1>
      <div className=" flex gap-4 w-full">
        <div
          onClick={() => {
            fetch(
              `https://dashboard-admin-server.iran.liara.run/${from}/${chosen.id}`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            ).then((value) => {
              console.log(value);

              setdatas((prev) => {
                const datas = prev.filter((data) => {
                  return data.id !== chosen.id;
                });
                return [...datas];
              });

              if (from === "Users") {
                if (
                  chosen.id ===
                  edititem[edititem.length === 0 ? 0 : edititem.length - 1]
                ) {
                  console.log("I seen");
                  setedititem([]);
                }
              } else if (from === "Products") {
                Navigate("/products");
                alert("deleted");
              }
              deletebox[1](null);
            });
          }}
          className={`${
            deletebox[0] === chosen.id
              ? "border-[1px]  w-[calc(50%-8px)] py-[2px] px-[10px] text-[.9rem] "
              : "border-0 w-[0px] p-0 text-[0px]"
          }  text-center flex items-center justify-center transition-all border-solid border-red-600 text-red-600 rounded-2xl duration-300 hover:bg-red-600 hover:text-white cursor-pointer`}
        >
          <button>Remove</button>
        </div>
        <div
          className={`${
            deletebox[0] === chosen.id
              ? "border-[1px]  w-[calc(50%-8px)] py-[2px] px-[10px] text-[.9rem]"
              : "border-0 w-[0px] p-0 text-[0px] "
          }  text-center rounded-2xl flex items-center justify-center transition-all border-solid border-gray-400 duration-300 text-black hover:bg-gray-400 hover:text-white cursor-pointer`}
          onClick={() => {
            deletebox[1](null);
          }}
        >
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}
export { Removebox };
