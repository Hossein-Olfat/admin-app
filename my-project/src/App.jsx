import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { json, useRoutes } from "react-router-dom";
import routes from "./routes.jsx";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import {
  Header_modal_context,
  Delete_modal_context,
} from "./modal_Context.jsx";
import { Modal_header } from "./Components/Header/Modalbox_header";

function App() {
  const Routes = useRoutes(routes);
  const [Header_modal, setHeader_modal] = useState("close");
  const [Delete_modal, setDelete_modal] = useState(null);
  console.log(Delete_modal);
  console.log(Header_modal);
  return (
    <Header_modal_context.Provider value={[Header_modal, setHeader_modal]}>
      <Delete_modal_context.Provider value={[Delete_modal, setDelete_modal]}>
        <div className="bg-[#fdfdfd] w-full relative">
          <Header />
          <Modal_header />
          <div className="flex mt-1 pl-0 pr-4">
            <Sidebar />

            <div
              className=" pb-4 transition-all
              
              xss:w-[calc(100%-71px)]
              w-[calc(100%-236px)] xs:w-[calc(100%-161px)] duration-300"
            >
              {Routes}
            </div>
          </div>
          <div
            className={`${
              Header_modal === "close" && Delete_modal === null
                ? "hidden"
                : " w-full h-full bg-[rgba(0,0,0,.3)] absolute top-0 left-0 z-20"
            }`}
          ></div>
        </div>
      </Delete_modal_context.Provider>
    </Header_modal_context.Provider>
  );
}
///^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
export default App;
