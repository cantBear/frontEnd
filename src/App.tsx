import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import Navigation from "./organism/Navigation";
import EmailConfig from "./template/EmailConfig";
import FolderConfig from "./template/FolderConfig";
import Home from "./template/Home";
import LogIn from "./template/LogIn";
import SignUp from "./template/SignUp";

const AppStyle = styled.div`
  background-color: #9ebb96;

  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  > .flex {
    box-shadow: 1px 4px 4px rgb(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 1100px;
    min-width: 1000px;
    height: 70vh;
    min-height: 740px;
    background-color: white;
    display: flex;
    .navigation {
      width: 140px;
      background-color: #547856;
      border-radius: 20px 0 0 20px;
      overflow: hidden;
    }
  }
`;
function App() {
  const [isLogged, setisLogged] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("loginToken")) {
      setisLogged(true);
    }
  }, []);
  return (
    <div className="App">
      {isLogged && (
        <AppStyle>
          <div className="flex">
            <div className="navigation">
              <Navigation />
            </div>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="mail-config" element={<EmailConfig />} />
              <Route path="folder-config" element={<FolderConfig />} />
            </Routes>
          </div>
        </AppStyle>
      )}
      {!isLogged && (
        <Routes>
          <Route path="" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
