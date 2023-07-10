import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { json, useRoutes } from "react-router-dom";
import routes from "./routes.jsx";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Modal_context } from "./modal_Context.jsx";
import { Modal_header } from "./Components/Header/Modalbox_header";
function App() {
  const Routes = useRoutes(routes);
  const [modal, setmodal] = useState("close");
  console.log(modal);
  return (
    <Modal_context.Provider value={[modal, setmodal]}>
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
            modal === "close"
              ? "hidden"
              : " w-full h-full bg-[rgba(0,0,0,.3)] absolute top-0 left-0 z-20"
          }`}
        ></div>
      </div>
    </Modal_context.Provider>
  );
}

export default App;
