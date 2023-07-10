import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { json, useRoutes } from "react-router-dom";
import routes from "./routes.jsx";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";

function App() {
  const Routes = useRoutes(routes);

  return (
    <div className="bg-[#fdfdfd] w-full relative">
      <Header />

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
    </div>
  );
}

export default App;
