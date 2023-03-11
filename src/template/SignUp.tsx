import React, { useState } from "react";
import styled from "styled-components";
import Input from "../atom/Input";
import { BorderBox, ButtonStyle, InputContainerStyle } from "../style";
import { tokenAxios } from "../utility";

const SignUpBoxStyle = styled(BorderBox)`
  flex-direction: column;
  width: 65vw;
  margin: 10% auto;
  min-height: 50vh;
  .top {
    width: 70%;
    display: flex;
    flex-direction: column;
    border-bottom: solid 1px;
    padding: 5% 10%;
    justify-content: space-between;
    .input {
      align-items: center;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      /* width: 80%; */
    }
  }
  .bottom {
    padding: 40px;
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
      const response = tokenAxios.post("/users/registers", formData);
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
      <div className="bottom">
        <ButtonStyle width="300px" height="60px" onClick={sendsignUp}>
          회원가입하기
        </ButtonStyle>
      </div>
    </SignUpBoxStyle>
  );
}
