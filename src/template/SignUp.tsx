import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Input from "../atom/Input";
import { ButtonStyle, InputContainerStyle } from "../style";
// import { tokenAxios } from "../utility";

const SignUpBoxStyle = styled.div`
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
    justify-content: space-between;
    align-items: center;
    height: max-content;

    .input {
      display: flex;
      height: 60px;
      align-items: center;
      justify-content: space-between;
      width: 400px;
      .tag {
        height: max-content;
      }
    }
  }
`;
export default function SignUp() {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [nickName, setnickName] = useState<string>("");

  const sendsignUp = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("nickName", nickName);
    try {
      await axios.post("/users/registers", formData, {
        baseURL: "https://motchamjing4.herokuapp.com/",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignUpBoxStyle>
      <div className="top">
        <div className="input">
          <div className="tag">이메일</div>
          <InputContainerStyle width="300px" height="40px">
            <Input placeholder="Email" state={email} setState={setemail} />
          </InputContainerStyle>
        </div>
        <div className="input">
          <div className="tag">비밀번호</div>
          <InputContainerStyle width="300px" height="40px">
            <Input
              placeholder="password"
              state={password}
              setState={setpassword}
            />
          </InputContainerStyle>
        </div>
        <div className="input">
          <div className="tag">닉네임</div>
          <InputContainerStyle width="300px" height="40px">
            <Input
              placeholder="NickName"
              state={nickName}
              setState={setnickName}
            />
          </InputContainerStyle>
        </div>
      </div>
      <ButtonStyle
        width="300px"
        height="60px"
        onClick={sendsignUp}
        backgroundColor="#F2A5A5"
      >
        회원가입하기
      </ButtonStyle>
    </SignUpBoxStyle>
  );
}
