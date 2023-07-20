import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Delete_modal_context } from "../../modal_Context.jsx";
import { Validation } from "../Validation.jsx";

// fetch("https://dashboard-admin-server.iran.liara.run/Users", {
//   method: "POST",
//   body: JSON.stringify({
//     id: 4,
//     username: "Mohammad Mahdizadeh",
//     img: "mmd.jpg",
//     email: "MMahdi46zadeh@gmail.com",
//     status: "active",
//     transactions: 250,
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
  const [EditItem, setEditItem] = useState([]);
  const [Submit, setSubmit] = useState(false);
  const findItem = Users.find((user) => {
    return (
      user.id === EditItem[EditItem.length === 0 ? 0 : EditItem.length - 1]
    );
  });
  let datas_error = Validation(findItem);
  console.log(datas_error);
  const each_slide = Users.slice(0 + Tablepage * 4, 4 + Tablepage * 4);
  const start_slide = Tablepage * 4 + 1;
  const numberofpages =
    Math.floor(Users.length / 4) + (Users.length % 4 === 0 ? 0 : 1) - 1;

  if (each_slide.length === 0) {
    if (Tablepage === 0) {
      console.log("there is no user");
    } else {
      setTablepage((prev) => {
        return prev - 1;
      });
    }
  }

  useEffect(() => {
    fetch("https://dashboard-admin-server.iran.liara.run/Users")
      .then((users) => {
        return users.json();
      })
      .then((_users) => {
        _users.sort((a, b) => {
          return a.id - b.id;
        });
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
                  <td className=" relative">
                    <div className="td-div flex items-center gap-3 user-name">
                      <img
                        src={`./public/images/${User.img}`}
                        width="40px"
                        className=" rounded-[50%]"
                      />

                      <input
                        className={` pl-1 td-div bg-transparent flex-grow cursor-text overflow-hidden whitespace-nowrap text-ellipsis rounded ${
                          User.id ===
                          EditItem[
                            EditItem.length === 0 ? 0 : EditItem.length - 1
                          ]
                            ? `${
                                datas_error[0] === true
                                  ? "border-solid border-[1px] border-red-600"
                                  : "border-solid border-[1px] border-green-600"
                              }`
                            : ""
                        }`}
                        type="text"
                        disabled={
                          User.id ===
                          EditItem[
                            EditItem.length === 0 ? 0 : EditItem.length - 1
                          ]
                            ? false
                            : true
                        }
                        onInput={(e) => {
                          setUsers((prev) => {
                            const users = [...prev];
                            return users.map((user) => {
                              if (user.id === User.id) {
                                user.username = e.target.value;
                                return user;
                              } else {
                                return user;
                              }
                            });
                          });
                        }}
                        value={User.username}
                      />
                      <label
                        className={` absolute text-red-600 left-16 bottom-1 transition-[font-size,transform] ${
                          EditItem[
                            EditItem.length === 0 ? 0 : EditItem.length - 1
                          ] === User.id && datas_error[0] === true
                            ? "text-[12px] scale-100"
                            : "text-[0px] scale-0"
                        }`}
                      >
                        please enter your name
                      </label>
                    </div>
                  </td>
                  <td className=" relative">
                    <input
                      className={`td-div w-full bg-transparent cursor-text overflow-hidden whitespace-nowrap text-ellipsis rounded ${
                        User.id ===
                        EditItem[
                          EditItem.length === 0 ? 0 : EditItem.length - 1
                        ]
                          ? ` ${
                              datas_error[1] === true
                                ? "border-solid border-[1px] border-red-600"
                                : "border-solid border-[1px] border-green-600"
                            }`
                          : ""
                      } `}
                      type="email"
                      value={User.email}
                      disabled={
                        User.id ===
                        EditItem[
                          EditItem.length === 0 ? 0 : EditItem.length - 1
                        ]
                          ? false
                          : true
                      }
                      onInput={(e) => {
                        setUsers((prev) => {
                          const users = [...prev];
                          return users.map((user) => {
                            if (user.id === User.id) {
                              user.email = e.target.value;
                              return user;
                            } else {
                              return user;
                            }
                          });
                        });
                      }}
                    />
                    <label
                      className={` absolute text-red-600 left-4 bottom-1 transition-[font-size,transform] ${
                        EditItem[
                          EditItem.length === 0 ? 0 : EditItem.length - 1
                        ] === User.id && datas_error[1] === true
                          ? "text-[12px] scale-100"
                          : "text-[0px] scale-0"
                      }`}
                    >
                      please enter valid email
                    </label>
                  </td>
                  <td>
                    {/* Now */}
                    <div className=" relative">
                      <select
                        onChange={(e) => {
                          setUsers((prev) => {
                            const users = [...prev];
                            console.log(e.target.value);
                            return users.map((user) => {
                              if (user.id === User.id) {
                                user.status = e.target.value;
                                return user;
                              } else {
                                return user;
                              }
                            });
                          });
                        }}
                        className={` w-full opacity-100 rounded ${
                          User.id ===
                          EditItem[
                            EditItem.length === 0 ? 0 : EditItem.length - 1
                          ]
                            ? " border-[1px] border-solid border-green-600 "
                            : "appearance-none"
                        }`}
                        disabled={
                          User.id ===
                          EditItem[
                            EditItem.length === 0 ? 0 : EditItem.length - 1
                          ]
                            ? false
                            : true
                        }
                        value={User.status}
                      >
                        <option value="active">active</option>
                        <option value="none-active">none-active</option>
                      </select>
                    </div>
                  </td>
                  <td className=" relative">
                    <div className="flex items-center w-full">
                      {User.id ===
                      EditItem[
                        EditItem.length === 0 ? 0 : EditItem.length - 1
                      ] ? (
                        <>
                          <input
                            onKeyDown={(e) => {
                              ["e", "E", "+", "-"].includes(e.key) &&
                                e.preventDefault();
                            }}
                            className={`bg-transparent rounded pl-1 touch-none ${
                              User.id ===
                              EditItem[
                                EditItem.length === 0 ? 0 : EditItem.length - 1
                              ]
                                ? `${
                                    datas_error[2] === true
                                      ? "border-[1px] border-solid border-red-600"
                                      : "border-[1px] border-solid border-green-600"
                                  } `
                                : ""
                            }`}
                            type="number"
                            maxLength={User.transactions.length}
                            onChange={(e) => {
                              setUsers((prev) => {
                                const users = [...prev];

                                return users.map((user) => {
                                  if (
                                    user.id === User.id &&
                                    e.target.value >= 0
                                  ) {
                                    if (
                                      e.target.value[0] === "0" &&
                                      e.target.value[1] !== undefined
                                    ) {
                                      return user;
                                    } else {
                                      user.transactions = e.target.value;
                                      return user;
                                    }
                                  } else {
                                    return user;
                                  }
                                });
                              });
                            }}
                            disabled={
                              User.id ===
                              EditItem[
                                EditItem.length === 0 ? 0 : EditItem.length - 1
                              ]
                                ? false
                                : true
                            }
                            value={User.transactions}
                          />
                          <label
                            className={` absolute text-red-600 left-4 bottom-1 transition-[font-size,transform] ${
                              EditItem[
                                EditItem.length === 0 ? 0 : EditItem.length - 1
                              ] === User.id && datas_error[2] === true
                                ? "text-[12px] scale-100"
                                : "text-[0px] scale-0"
                            }`}
                          >
                            please enter a number
                          </label>
                        </>
                      ) : (
                        User.transactions + "$"
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="td-div flex items-center gap-6 relative">
                      <button
                        onClick={() => {
                          if (
                            User.id ===
                            EditItem[
                              EditItem.length === 0 ? 0 : EditItem.length - 1
                            ]
                          ) {
                            if (Submit === false) {
                              console.log(findItem, Validation(findItem));
                              if (datas_error.includes(true) === false) {
                                setSubmit(true);
                                fetch(
                                  `https://dashboard-admin-server.iran.liara.run/Users/${User.id}`,
                                  {
                                    method: "PUT",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(findItem),
                                  }
                                );
                                setTimeout(() => {
                                  setEditItem([]);
                                  setSubmit(false);
                                }, 1500);
                              } else {
                                console.log("please enter a valid email");
                              }
                            } else {
                              console.log(
                                "please wait until the changes to be registered"
                              );
                            }
                          } else {
                            setEditItem((prev) => {
                              const edititem = [...prev];
                              edititem.push(User.id);

                              if (edititem.length === 2) {
                                fetch(
                                  "https://dashboard-admin-server.iran.liara.run/Users/"
                                )
                                  .then((init) => {
                                    return init.json();
                                  })
                                  .then((_init) => {
                                    setUsers(_init);
                                  });

                                return edititem.slice(1);
                              } else {
                                return edititem;
                              }
                            });
                          }
                        }}
                        className={`text-white py-[2px] px-[14px] rounded-lg transition-[background-color]
                        ${
                          EditItem[
                            EditItem.length === 0 ? 0 : EditItem.length - 1
                          ] === User.id
                            ? `w-[54.81px] h-[28px] flex items-center justify-center
                            ${
                              Submit === false
                                ? " bg-blue-600 text-base"
                                : "bg-green-600 text-2xl"
                            }`
                            : "bg-green-600"
                        }`}
                      >
                        {EditItem[
                          EditItem.length === 0 ? 0 : EditItem.length - 1
                        ] === User.id ? (
                          Submit === false ? (
                            <MdEdit />
                          ) : Submit === true ? (
                            <TiTick />
                          ) : (
                            ""
                          )
                        ) : (
                          "Edit"
                        )}
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
                        className={` rounded-xl absolute -top-[130%] right-[50px] z-30 bg-white  flex flex-col gap-4 items-center justify-evenly transition-all xss:right-[15px] ${
                          Deletebox[0] === User.id
                            ? "w-[200px] p-3"
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
                              ).then((value) => {
                                console.log(value);

                                setUsers((prev) => {
                                  const users = prev.filter((user) => {
                                    return user.id !== User.id;
                                  });
                                  return [...users];
                                });

                                setSubmit(true);
                                setTimeout(() => {
                                  setSubmit(false);
                                }, 1500);
                                if (
                                  User.id ===
                                    EditItem[
                                      EditItem.length === 0
                                        ? 0
                                        : EditItem.length - 1
                                    ] &&
                                  Submit === false
                                ) {
                                  setEditItem([]);
                                }
                                Deletebox[1](null);
                              });
                            }}
                            className={`${
                              Deletebox[0] === User.id
                                ? "border-[1px]  w-[calc(50%-8px)] py-[2px] px-[10px] text-[.9rem] "
                                : "border-0 w-[0px] p-0 text-[0px]"
                            }  text-center flex items-center justify-center transition-all border-solid border-red-600 text-red-600 rounded-2xl duration-300 hover:bg-red-600 hover:text-white cursor-pointer`}
                          >
                            <button>Remove</button>
                          </div>
                          <div
                            className={`${
                              Deletebox[0] === User.id
                                ? "border-[1px]  w-[calc(50%-8px)] py-[2px] px-[10px] text-[.9rem]"
                                : "border-0 w-[0px] p-0 text-[0px] "
                            }  text-center rounded-2xl flex items-center justify-center transition-all border-solid border-gray-400 duration-300 hover:bg-gray-400 hover:text-white cursor-pointer`}
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
