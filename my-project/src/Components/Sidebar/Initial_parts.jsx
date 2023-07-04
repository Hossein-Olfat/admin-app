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
      { icon: <AiOutlineHome className="mr-2" />, label: "Home" },
      {
        icon: <IoMdAnalytics className="mr-2" />,
        label: "Analytics",
      },
      { icon: <GiProgression className="mr-2" />, label: "Sales" },
    ],
  },
  {
    id: 1,
    title: "Quick Menu",
    childeren: [
      { icon: <FiUser className="mr-2" />, label: "Users" },
      { icon: <FiUserPlus className="mr-2" />, label: "New User" },
      {
        icon: <MdOutlineStorefront className="mr-2" />,
        label: "Products",
      },
      { icon: <BiDollar className="mr-2" />, label: "Transactions" },
      { icon: <IoIosStats className="mr-2" />, label: "Reports" },
    ],
  },
  {
    id: 2,
    title: "Notifications",
    childeren: [
      { icon: <FiMail className="mr-2" />, label: "Mail" },
      {
        icon: <MdOutlineDynamicFeed className="mr-2" />,
        label: "Feedback",
      },
      { icon: <BsChatLeft className="mr-2" />, label: "Messages" },
    ],
  },
  {
    id: 3,
    title: "Staff",
    childeren: [
      { icon: <BsBag className="mr-2" />, label: "Manage" },
      {
        icon: <IoMdAnalytics className="mr-2" />,
        label: "Analytics",
      },
      {
        icon: <BsExclamationCircleFill className="mr-2" />,
        label: "Reports",
      },
    ],
  },
];

export { Initial_Parts };
