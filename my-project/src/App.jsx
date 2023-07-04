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
    </div>
  );
}

export default App;
