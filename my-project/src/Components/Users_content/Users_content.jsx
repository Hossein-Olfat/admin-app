import { TiTick } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Delete_modal_context } from "../../modal_Context.jsx";
import { Validation } from "../Validation.jsx";
import { Spinner } from "../../Spinner.jsx";
import { Pagination_datas } from "./Pagination_datas.jsx";
import { Pagination_ui } from "./Pagination_ui.jsx";
import { Removebox } from "../Removebox.jsx";
// fetch("https://dashboard-admin-server.iran.liara.run/Users", {
//   method: "POST",
//   body: JSON.stringify({
//     id: 6,
//     username: "Akram Sadeghi",
//     img: "zahra.jpg",
//     email: "Ak78Sadegh@gmail.com",
//     status: "active",
//     transactions: "400",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// fetch("https://dashboard-admin-server.iran.liara.run/Users/6", {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

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
  const [each_slide, start_slide, numberofpages] = Pagination_datas(
    Users,
    Tablepage,
    setTablepage
  );

  useEffect(() => {
    let ignore;
    fetch("https://dashboard-admin-server.iran.liara.run/Users")
      .then((users) => {
        return users.json();
      })
      .then((_users) => {
        _users.sort((a, b) => {
          return a.id - b.id;
        });
        if (!ignore) {
          setUsers(_users);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);
  //
  return (
    <>
      {Users.length !== 0 ? (
        <div className="border border-solid border-[rgb(224,224,224)] rounded-sm h-full flex flex-col justify-between gap-3">
          <div className=" overflow-x-auto flex-grow relative">
            <table className=" border-collapse table-tr:border-solid table-tr:border-b table-tr:border-[rgb(224,224,224)] w-[1112px] table-td:p-4 table-td:text-left table-th:py-4 table-th:text-left table-th-div:px-4  xss:users-name:flex-col xss:users-name:items-start xss:w-[830px]">
              <thead>
                <tr>
                  <th>
                    <div className="th-div">ID</div>
                  </th>
                  <th>
                    <div className="th-div border-l border-solid border-[rgb(224,224,224)]">
                      User{" "}
                    </div>
                  </th>
                  <th>
                    <div className="th-div border-l border-solid border-[rgb(224,224,224)]">
                      Email{" "}
                    </div>
                  </th>
                  <th>
                    <div className="th-div border-l border-solid border-[rgb(224,224,224)]">
                      Status
                    </div>
                  </th>
                  <th>
                    <div className="th-div border-l border-solid border-[rgb(224,224,224)]">
                      Transaction
                    </div>
                  </th>
                  <th>
                    <div className="th-div border-l border-solid border-[rgb(224,224,224)]">
                      Action
                    </div>
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
                                    EditItem.length === 0
                                      ? 0
                                      : EditItem.length - 1
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
                                    EditItem.length === 0
                                      ? 0
                                      : EditItem.length - 1
                                  ]
                                    ? false
                                    : true
                                }
                                value={User.transactions}
                              />
                              <label
                                className={` absolute text-red-600 left-4 bottom-1 transition-[font-size,transform] ${
                                  EditItem[
                                    EditItem.length === 0
                                      ? 0
                                      : EditItem.length - 1
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
                                  EditItem.length === 0
                                    ? 0
                                    : EditItem.length - 1
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

                          <Removebox
                            from={"Users"}
                            chosen={User}
                            deletebox={Deletebox}
                            edititem={EditItem}
                            setdatas={setUsers}
                            setedititem={setEditItem}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Pagination_ui
            Start_slide={start_slide}
            users={Users}
            setpage_number={setTablepage}
            page_number={Tablepage}
            number_of_pages={numberofpages}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

// {/* <table className="border-collapse [&**]:border-0 [&*tr]:border-solid [&*tr]:border-b [&*tr]:border-[rgb(224,224,224)] w-[1112px] [&*td]:p-4 [&*td]:text-left [&*th]:py-4 [&*th]:text-left [&*.th-div]:px-4 [&*.th-div]:border-l [&*.th-div]:border-[rgb(224,224,224)] [&*.th-div]:border-solid"> */}

export { Users_content };
