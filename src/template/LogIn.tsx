import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import styled from "styled-components";
import Input from "../atom/Input";
import { BorderBox, ButtonStyle, InputContainerStyle } from "../style";
import { tokenAxios } from "../utility";

const LogInBoxStyle = styled(BorderBox)`
  flex-direction: column;
  width: 65vw;
  margin: 10% auto;
  min-height: 50vh;
  .top {
    width: 70%;
    display: flex;
    border-bottom: solid 1px;
    padding: 5% 10%;
    justify-content: space-between;
    .input {
      align-items: center;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      width: 280px;
    }
    .loginButton {
      margin-left: 24px;
      width: 180px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f2a5a5;
      font-size: 14px;
      border: solid 1px;
    }
  }
  .bottom {
    padding: 40px;
  }
`;

export default function LogIn() {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const navigate = useNavigate();

  const sendLogin = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try {
      const response = await tokenAxios.post("/users/logins", formData);
      window.localStorage.setItem("loginToken", response.data.token);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LogInBoxStyle>
      <div className="top">
        <div className="inputList">
          <div className="input">
            <div className="tag">이메일</div>
            <InputContainerStyle width="200px" height="40px">
              <Input placeholder="Email" state={email} setState={setemail} />
            </InputContainerStyle>
          </div>
          <div className="input">
            <div className="tag">패스워드</div>
            <InputContainerStyle width="200px" height="40px">
              <Input
                placeholder="password"
                state={password}
                setState={setpassword}
              />
            </InputContainerStyle>
          </div>
        </div>
        <div className="loginButton" onClick={sendLogin}>
          로그인
        </div>
      </div>
      <div className="bottom">
        <ButtonStyle
          width="300px"
          height="60px"
          onClick={() => navigate("signup")}
        >
          회원가입하러가기
        </ButtonStyle>
      </div>
    </LogInBoxStyle>
  );
}
