import { useEffect, useState } from "react";
import { MdVisibility } from "react-icons/md";
import { Spinner } from "../../../../Spinner";

function Widgetsm() {
  const [Newusers, setNewusers] = useState([]);
  useEffect(() => {
    let ignore;
    fetch("https://dashboard-admin-server.iran.liara.run/newusers")
      .then((newusers) => {
        return newusers.json();
      })
      .then((_newusers) => {
        if (!ignore) {
          setNewusers(_newusers);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <div className=" flex flex-col h-full">
      <h1 className=" text-[1.35rem] font-semibold mb-6">New join Members</h1>
      <ul className=" flex gap-5 flex-col flex-grow justify-around">
        {Newusers.length !== 0 ? (
          Newusers.map((newuser) => {
            return (
              <li
                key={newuser.id}
                className=" flex justify-between items-center flex-wrap gap-3"
              >
                <div className=" w-10 rounded-[50%] overflow-hidden">
                  <img src={`./public/images/${newuser.img}`} />
                </div>

                <div className="flex flex-col items-center xxs:items-start">
                  <h1 className=" text-sm">{newuser.username}</h1>
                  <span className=" text-sm text-gray-400">
                    {newuser.title}
                  </span>
                </div>
                <button className=" py-2 px-3 bg-[#eeeef7] rounded-xl">
                  <MdVisibility className=" text-[#555]" />
                </button>
              </li>
            );
          })
        ) : (
          <Spinner />
        )}
      </ul>
    </div>
  );
}
export { Widgetsm };
