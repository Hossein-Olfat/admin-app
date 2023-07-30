import { AiOutlineHome } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { IoMdAnalytics } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineStorefront } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { BsChatLeft } from "react-icons/bs";
import { BsExclamationCircleFill } from "react-icons/bs";
import { IoIosStats } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { FiMail } from "react-icons/fi";

const Initial_Parts = [
  {
    id: 0,
    title: "Dashboard",
    childeren: [
      { icon: <AiOutlineHome />, label: "Home" },
      {
        icon: <IoMdAnalytics />,
        label: "Analytics",
      },
      { icon: <GiProgression />, label: "Sales" },
    ],
  },
  {
    id: 1,
    title: "Quick Menu",
    childeren: [
      { icon: <FiUser />, label: "Users" },
      { icon: <FiUserPlus />, label: "New User" },
      {
        icon: <MdOutlineStorefront />,
        label: "Products",
      },
      { icon: <BiDollar />, label: "Transactions" },
      // { icon: <IoIosStats />, label: "Reports" },
    ],
  },
  {
    id: 2,
    title: "Notifications",
    childeren: [
      { icon: <FiMail />, label: "Mail" },
      {
        icon: <MdOutlineDynamicFeed />,
        label: "Feedback",
      },
      { icon: <BsChatLeft />, label: "Messages" },
    ],
  },
  // {
  //   id: 3,
  //   title: "Staff",
  //   childeren: [
  //     { icon: <BsBag />, label: "Manage" },
  //     {
  //       icon: <IoMdAnalytics />,
  //       label: "Analytics",
  //     },
  //     {
  //       icon: <BsExclamationCircleFill />,
  //       label: "Reports",
  //     },
  //   ],
  // },
];

export { Initial_Parts };
