import { NavLink } from "react-router-dom";

function Part({ title, Part_Childeren }) {
  return (
    <div className=" mb-3">
      <h1 className="font-bold text-gray-400 mb-2 text-xs">{title}</h1>
      <ul className=" ml-3">
        {Part_Childeren.map((value) => {
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
              <li className=" flex items-center">
                {value.icon}
                <span>{value.label}</span>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export { Part };
