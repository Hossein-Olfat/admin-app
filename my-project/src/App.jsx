import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { json, useRoutes } from "react-router-dom";
import routes from "./routes.jsx";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
function App() {
  return (
    <div className="bg-[#fdfdfd] w-full">
      <Header />
      <div className="flex px-4 mt-1 xs:pl-0">
        <Sidebar />
        <div className=" w-[calc(100%-236px)] pb-4 xs:w-[calc(100%-161px)]"></div>
      </div>
    </div>
  );
}

export default App;
