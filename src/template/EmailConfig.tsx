import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../atom/Input";
import {
  ButtonStyle,
  Gap,
  GrayTextStyle,
  InputContainerStyle,
  LargeTitleTextStyle,
  PageStyleCss,
  SecondTitleTextStyle,
  ShadowBox,
  TextStyle,
} from "../style";
import { tokenAxios } from "../utility";

const EmailConfigStyle = styled.div`
  ${PageStyleCss}
  .main {
    justify-content: space-between;
    .buttonContainer {
      height: max-content;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const AccountCard = styled.div`
  height: 30px;
  line-height: 30px;
  width: 100%;
  border: solid 1px;
  border-radius: 0 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 20px;
  padding-left: 16px;
`;

export default function EmailConfig() {
  //  MODEL
  const [mailAccountList, setmailAccountList] = useState<Array<string>>([]);
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [appKey, setappKey] = useState<string>("");

  const [postFlag, setpostFlag] = useState(true);
  //  ACTION
  const sendNewEmail = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    if (appKey) {
      formData.append("g_Key", appKey);
    }
    await tokenAxios.post("emailauths/", formData);
    alert("메일 인증에 성공했습니다!");
    setpostFlag((flag) => !flag);
  };
  //  VIEW
  const mailUIList = mailAccountList.map((account, i) => (
    <AccountCard key={i}>{account}</AccountCard>
  ));
  //  BUSINESSMODEL
  const getAccountList = async () => {
    const response = await tokenAxios.get("emailauths/");
    setmailAccountList(response.data);
  };
  const initInput = () => {
    setappKey("");
    setemail("");
    setemail("");
  };
  useEffect(() => {
    getAccountList();
    initInput();
  }, [postFlag]);
  return (
    <EmailConfigStyle>
      <div className="title">
        <LargeTitleTextStyle>계정관리</LargeTitleTextStyle>
        <Gap rSmall />
        <GrayTextStyle>
          이메일을 분류할 폴더를 만들고,규칙을 추가해요.
        </GrayTextStyle>
      </div>

      <div className="main">
        <ShadowBox width="30%" height="100%">
          <SecondTitleTextStyle>현재 연동된 메일</SecondTitleTextStyle>
          <Gap rSmall />

          {mailUIList}
        </ShadowBox>
        <ShadowBox width="60%">
          <SecondTitleTextStyle>새로운 메일 연동하기</SecondTitleTextStyle>
          <Gap rSmall />
          <br />
          <TextStyle>연동할 메일주소와 비밀번호를 입력해주세요.</TextStyle>
          <Gap small />
          <InputContainerStyle width="60%">
            <Input placeholder="email" state={email} setState={setemail} />
          </InputContainerStyle>
          <InputContainerStyle width="60%">
            <Input
              placeholder="password"
              state={password}
              setState={setpassword}
            />
          </InputContainerStyle>

          <Gap />
          <Gap small />

          <TextStyle>gmail 등록시 앱 키를 추가적으로 입력해주세요.</TextStyle>
          <Gap small />

          <InputContainerStyle width="60%">
            <Input placeholder="appkey" state={appKey} setState={setappKey} />
          </InputContainerStyle>
          <Gap />
          <Gap />
          <div className="buttonContainer">
            <ButtonStyle width="40%" height="60px" onClick={sendNewEmail}>
              이메일 연동하기
            </ButtonStyle>
          </div>
        </ShadowBox>
      </div>
    </EmailConfigStyle>
  );
}
