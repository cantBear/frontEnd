import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  width: 80px;
  position: relative;
  .nav-link {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;

    margin-bottom: 40px;
    border-bottom: solid 1px #c8c8c8;

    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    color: #c8c8c8;
  }
  .activated {
    font-weight: 600;
    color: white;
    border-bottom: solid 2px white;
  }
  .logOut {
    cursor: pointer;
    font-size: 14px;
    color: #c8c8c8;
    height: 14px;
    position: absolute;
    bottom: 100px;
  }
`;

export default function Navigation() {
  const navigationList = [
    { name: "홈", to: "/" },
    { name: "계정 관리", to: "/mail-config" },
    { name: "폴더 관리", to: "/folder-config" },
    { name: "보관함", to: "/archive" },
  ];
  const logOut = () => {
    localStorage.removeItem("loginToken");
  };
  return (
    <NavigationStyle>
      {navigationList.map((item, i) => (
        <NavLink
          key={i}
          to={item.to}
          className={({ isActive }) =>
            "nav-link" + (isActive ? " activated" : "")
          }
        >
          {item.name}
        </NavLink>
      ))}
      <div className="logOut" onClick={logOut}>
        logout
      </div>
    </NavigationStyle>
  );
}
