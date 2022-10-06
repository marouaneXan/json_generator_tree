import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Dashboard = () => {
  const [json, setJson] = useState();
  const navigate = useNavigate();
  const { connected } = useContext(AuthContext);
  useEffect(() => {
    !connected ? navigate("/login") : "";
  }, [connected]);

  //Generate tree
  const tree = document.getElementById("tree");
  let level = -1;
  const printObj = (ob, parent) => {
    level++;
    Object.keys(ob).forEach((e) => {
      const div = document.createElement("div");
      const child = document.createElement("input");
      child.setAttribute(
        "style",
        `margin-left: ${level * 22}px;margin-top:4px`
      );
      child.setAttribute("disabled", "");
      child.value = typeof ob[e] === "object" ? e : ob[e];
      div.appendChild(child);
      parent.appendChild(div);
      if (typeof ob[e] === "object") printObj(ob[e], div);
      else {
      }
    });
  };

  const handleSubmit = () => {
    if (!json) alert("Please add Object Content");
    printObj(JSON.parse(json), tree);
  };

  return (
    <div className="flex flex-col justify-center space-y-6 md:justify-between md:space-y-0 md:space-x-6 p-8 md:flex-row">
      <form className="w-full">
        <textarea
          onChange={(e) => {
            setJson(e.target.value);
          }}
          name={json}
          value={json}
          rows="23"
          className="block m-0 p-2.5 w-full  text-sm rounded-lg text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Json object..."
        ></textarea>
        <button
          type="button"
          onClick={handleSubmit}
          className="py-2.5 px-5 mr-2 mt-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Generate
        </button>
      </form>

      <div
        id="tree"
        className="block p-2.5 w-full overflow-scroll h-[100vh] md:w-1/2 text-sm rounded-lg text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Json object..."
      ></div>
    </div>
  );
};

export default Dashboard;
