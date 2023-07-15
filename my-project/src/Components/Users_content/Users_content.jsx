import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { Delete_modal_context } from "../../modal_Context.jsx";

// fetch("https://dashboard-admin-server.iran.liara.run/Users/", {
//   method: "POST",
//   body: JSON.stringify({
//     id: 6,
//     username: "Akram Sadeghi",
//     img: "zahra.jpg",
//     email: "Ak78Sadegh@gmail.com",
//     status: "active",
//     transactions: "400$",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// fetch("https://dashboard-admin-server.iran.liara.run/Users/6", {
//   method: "DELETE",
// });
// fetch("https://dashboard-admin-server.iran.liara.run/Users/")
//   .then((u) => {
//     return u.json();
//   })
//   .then((us) => {
//     console.log(us);
//   });
function Users_content() {
  const Deletebox = useContext(Delete_modal_context);
  const [Users, setUsers] = useState([]);
  const [Tablepage, setTablepage] = useState(0);
  console.log(Deletebox);
  Users.sort((a, b) => {
    return a.id - b.id;
  });
  const each_slide = Users.slice(0 + Tablepage * 4, 4 + Tablepage * 4);
  const numberofpages =
    Math.floor(Users.length / 4) + (Users.length % 4 === 0 ? 0 : 1) - 1;
  if (each_slide.length === 0) {
    if (Tablepage === 0) {
    } else {
      setTablepage((prev) => {
        return prev - 1;
      });
    }
  }
  const start_slide = Tablepage * 4 + 1;

  useEffect(() => {
    fetch("https://dashboard-admin-server.iran.liara.run/Users")
      .then((users) => {
        return users.json();
      })
      .then((_users) => {
        setUsers(_users);
      });
  }, []);
  //
  return (
    <div className="border border-solid border-[rgb(224,224,224)] rounded-sm h-full flex flex-col justify-between gap-3">
      <div className=" overflow-x-auto flex-grow relative">
        <table className=" border-collapse table-tr:border-solid table-tr:border-b table-tr:border-[rgb(224,224,224)] w-[1112px] table-td:p-4 table-td:text-left table-th:py-4 table-th:text-left table-th-div:px-4 table-th-div:border-l table-th-div:border-[rgb(224,224,224)] table-th-div:border-solid xss:users-name:flex-col xss:users-name:items-start xss:w-[830px]">
          <thead>
            <tr>
              <th>
                <div className="th-div">ID</div>
              </th>
              <th>
                <div className="th-div">User </div>
              </th>
              <th>
                <div className="th-div">Email </div>
              </th>
              <th>
                <div className="th-div">Status</div>
              </th>
              <th>
                <div className="th-div">Transaction</div>
              </th>
              <th>
                <div className="th-div">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {each_slide.map((User) => {
              return (
                <tr key={User.id}>
                  <td>
                    <div className="td-div">{User.id}</div>
                  </td>
                  <td>
                    <div className="td-div flex items-center gap-3 user-name">
                      <img
                        src={`./public/images/${User.img}`}
                        width="40px"
                        className=" rounded-[50%]"
                      />
                      <span>{User.username}</span>
                    </div>
                  </td>
                  <td>
                    <div className="td-div">{User.email}</div>
                  </td>
                  <td>
                    <div className="td-div">{User.status}</div>
                  </td>
                  <td>
                    <div className="td-div">{User.transactions}</div>
                  </td>
                  <td>
                    <div className="td-div flex items-center gap-6 relative">
                      <button
                        className=" bg-green-600 text-white py-[2px] px-[14px] rounded-lg"
                        type="submit"
                      >
                        Edit
                      </button>
                      <span
                        className=" relative"
                        onClick={() => {
                          Deletebox[1](User.id);
                        }}
                      >
                        <FaTrash className=" text-red-600 cursor-pointer" />
                      </span>
                      <div
                        className={` rounded-xl absolute top-[-35px] right-[65px] z-30 bg-white  flex flex-col gap-4 items-center justify-evenly transition-all ${
                          Deletebox[0] === User.id
                            ? "w-[200px] px-6 py-3"
                            : "w-[0px] text-[0px] p-0"
                        }`}
                      >
                        <h1
                          className={`w-full text-center duration-300 ${
                            Deletebox[0] === User.id ? "text-2xl" : "text-[0px]"
                          }`}
                        >
                          Are You Sure?
                        </h1>
                        <div className=" flex gap-4 w-full">
                          <div
                            onClick={(e) => {
                              fetch(
                                `https://dashboard-admin-server.iran.liara.run/Users/${User.id}`,
                                {
                                  method: "DELETE",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                }
                              ).then(() => {
                                fetch(
                                  "https://dashboard-admin-server.iran.liara.run/Users/"
                                )
                                  .then((users) => {
                                    return users.json();
                                  })
                                  .then((_users) => {
                                    console.log(_users);
                                    setUsers(_users);
                                    Deletebox[1](null);
                                  });
                              });
                              console.log(e);
                            }}
                            className={`${
                              Deletebox[0] === User.id
                                ? "border-[1px]  w-[calc(50%-8px)] py-[2px] px-[10px] text-[.9rem] "
                                : "border-0 w-[0px] p-0 text-[0px]"
                            }  text-center flex items-center justify-center transition-all border-solid border-red-600 text-red-600 rounded-2xl duration-300`}
                          >
                            <button>Remove</button>
                          </div>
                          <div
                            className={`${
                              Deletebox[0] === User.id
                                ? "border-[1px]  w-[calc(50%-8px)] py-[2px] px-[10px] text-[.9rem]"
                                : "border-0 w-[0px] p-0 text-[0px] "
                            }  text-center rounded-2xl flex items-center justify-center transition-all border-solid border-gray-400 duration-300`}
                            onClick={() => {
                              Deletebox[1](null);
                            }}
                          >
                            <button>Cancel</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className=" flex items-center justify-end gap-4 p-4">
        <div>
          <span>
            {start_slide}-{Users.length > start_slide + 3 ? 4 : Users.length} of{" "}
            {Users.length}
          </span>
        </div>
        <div className="flex gap-4 text-xl">
          <button
            onClick={() => {
              setTablepage((prev) => {
                console.log("Hi");
                return prev - 1;
              });
            }}
            disabled={Tablepage === 0 ? true : false}
            className=" cursor-pointer"
          >
            <MdOutlineKeyboardArrowLeft
              className={` transition-all ${
                Tablepage === 0 ? "text-[rgb(224,224,224)]" : ""
              }`}
            />
          </button>
          <button
            onClick={() => {
              setTablepage((prev) => {
                console.log(Tablepage, numberofpages);
                return prev + 1;
              });
            }}
            disabled={numberofpages === Tablepage ? true : false}
            className=" cursor-pointer"
          >
            <MdOutlineKeyboardArrowRight
              className={` transition-all ${
                numberofpages === Tablepage ? "text-[rgb(224,224,224)]" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
// {/* <table className="border-collapse [&**]:border-0 [&*tr]:border-solid [&*tr]:border-b [&*tr]:border-[rgb(224,224,224)] w-[1112px] [&*td]:p-4 [&*td]:text-left [&*th]:py-4 [&*th]:text-left [&*.th-div]:px-4 [&*.th-div]:border-l [&*.th-div]:border-[rgb(224,224,224)] [&*.th-div]:border-solid"> */}

export { Users_content };
