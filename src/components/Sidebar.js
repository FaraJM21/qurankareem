import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGLobalContext } from "../hooks/contextApi";
function Sidebar() {
  const { handleTemp, handleClick, openSidebar, handleTheme } =
    useGLobalContext();

  return (
    <div
      className="sidebarCont wrapper"
      style={{ translate: openSidebar ? "0%" : "90%" }}
    >
      <div className="icon">
        <i className="template1" onClick={handleClick}>
          <AiFillSetting className="themIcon" />
        </i>
      </div>
      <div className="sidebar wrapper">
        <div className="themContainer">
          <div className="templates">
            <h3>Templates</h3>
            <div>
              <div
                className="template1"
                onClick={() => handleTemp("template1")}
              ></div>
              <div
                className="template2"
                onClick={() => handleTemp("template2")}
              ></div>
              <div
                className="template3"
                onClick={() => handleTemp("template3")}
              ></div>
              <div
                className="template4"
                onClick={() => handleTemp("template4")}
              ></div>
            </div>
          </div>

          <div className="thems">
            <h3>Theme</h3>
            <div>
              <i className="day">
                <BsFillSunFill onClick={() => handleTheme("light-mode")} />
              </i>
              <i className="night">
                <BsFillMoonFill onClick={() => handleTheme("dark-mode")} />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
