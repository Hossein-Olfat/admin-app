import { NavLink } from "react-router-dom";

function Part({ title, Part_Childeren }) {
  return (
    <div className=" mb-3">
      <h1
        className="font-bold transition-all duration-300 text-gray-400 
           xss:text-[0rem] xss:h-0 xss:mb-0  mb-2 text-xs"
      >
        {title}
      </h1>
      <ul className="xss:ml-0 ml-3 transition-all duration-300">
        {Part_Childeren.map((value) => {
          console.log(value.icon.props.className);
          return (
            <NavLink
              className={({ isActive }) => {
                return `mb-1 block transition-[background-color] duration-300 text-sm hover:bg-slate-200 ${
                  isActive ? "bg-slate-200" : ""
                }`;
              }}
              key={value.label}
              to={`/${
                value.label === "Reports" || value.label === "Analytics"
                  ? title.replace(/\s/g, "") +
                    "/" +
                    value.label.replace(/\s/g, "")
                  : value.label === "Home"
                  ? ""
                  : value.label.replace(/\s/g, "")
              }`}
            >
              <li
                className=" transition-all delay-75 duration-300 flex items-center xss:gap-0 xss:justify-center xss:text-base
                     gap-2"
              >
                {value.icon}
                <span
                  className="transition-all
                    delay-[25ms]
                   xss:text-[0px]  duration-300"
                >
                  {value.label}
                </span>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export { Part };
