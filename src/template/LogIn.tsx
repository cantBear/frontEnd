import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Input from "../atom/Input";
import { ButtonStyle, InputContainerStyle } from "../style";
// import { tokenAxios } from "../utility";

const LogInBoxStyle = styled.div`
  width: 65vw;
  margin: 0 auto;
  min-height: 50vh;
  height: 500px;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .inputList {
    height: max-content;
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
      const response = await axios.post("/users/logins", formData);
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
          <InputContainerStyle width="300px" height="40px">
            <Input placeholder="Email" state={email} setState={setemail} />
          </InputContainerStyle>

          <InputContainerStyle width="300px" height="40px">
            <Input
              placeholder="password"
              state={password}
              setState={setpassword}
            />
          </InputContainerStyle>
        </div>
        <ButtonStyle
          width="150px"
          height="80px"
          onClick={sendLogin}
          backgroundColor="#F2A5A5"
        >
          로그인
        </ButtonStyle>
      </div>
      <ButtonStyle
        width="300px"
        height="40px"
        onClick={() => navigate("signup")}
      >
        회원가입하러가기
      </ButtonStyle>
    </LogInBoxStyle>
  );
}
