import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../atom/Input";
import FolderRuleBox from "../molecule/FolderRuleBox";
import KeywordInput from "../molecule/KeywordInput";
import MailCompanySelect from "../molecule/MailCompanySelect";
import {
  ButtonStyle,
  Gap,
  GrayTextStyle,
  InputContainerStyle,
  LargeTitleTextStyle,
  PageStyleCss,
  SecondTitleTextStyle,
  ShadowBox,
} from "../style";
import { tokenAxios } from "../utility";

const EmailConfigStyle = styled.div`
  ${PageStyleCss}
  .main {
    justify-content: space-between;
    .folderContainer {
      width: 50%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .lastFolder {
      margin-left: 20px;
      padding-left: 4px;
      border-left: solid 1px #b8b8b8;
      height: calc(100% - 200px);
    }
    .buttonContainer {
      height: max-content;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export default function EmailConfig() {
  //  MODEL
  interface folderObj {
    id: number;
    user?: number;
    folder_name: string;
    sender: Array<string>;
    keyWordList: Array<string>;
    email_domain: Array<string>;
  }
  const [folderList, setfolderList] = useState<Array<folderObj>>([]);
  const [folder_name, setfolder_name] = useState<string>("");
  const [sender, setsender] = useState<Array<string>>([]);
  const [keyword, setkeyword] = useState<Array<string>>([]);
  const [email_domain, setemail_domain] = useState<string[]>([]);
  const [isEdit, setisEdit] = useState(false);

  const [postFlag, setpostFlag] = useState(true);

  //  ACTION
  const addNewFolder = async () => {
    const formData = new FormData();
    formData.append("folder_name", folder_name);
    formData.append("sender", `${sender}`);
    formData.append("keyword", `${keyword}`);
    formData.append("email_domain", `${email_domain}`);

    await tokenAxios.post("myfolders/", formData);
    alert("폴더 추가에 성공했습니다!");
    setpostFlag((flag) => !flag);
  };
  const editFolder = async () => {};

  //  VIEW
  const folderUIList = folderList.map((folderObj, i) => (
    <FolderRuleBox
      key={i}
      name={folderObj.folder_name}
      keyword={folderObj.keyWordList || ["any"]}
      sender={folderObj.sender || ["any"]}
      email_domain={folderObj.email_domain || ["any"]}
      onClick={() => {
        setfolder_name(folderObj.folder_name);
        setsender(folderObj.sender);
        setkeyword(folderObj.keyWordList);
        setemail_domain(folderObj.email_domain);
        setisEdit(true);
      }}
    />
  ));
  //  BUSINESSMODEL
  const getFolderList = async () => {
    const response = await tokenAxios.get("myfolders/");
    setfolderList(response.data);
  };
  useEffect(() => {
    getFolderList();
  }, [postFlag]);
  return (
    <EmailConfigStyle>
      <div className="title">
        {!isEdit && <LargeTitleTextStyle>폴더 규칙 관리</LargeTitleTextStyle>}
        <Gap rSmall />
        <GrayTextStyle>
          이메일을 분류할 폴더를 만들고,규칙을 추가해요.
        </GrayTextStyle>
      </div>

      <div className="main">
        <div className="folderContainer">{folderUIList}</div>
        <ShadowBox width="45%">
          <SecondTitleTextStyle>폴더 규칙 추가</SecondTitleTextStyle>
          <Gap small />

          <InputContainerStyle width="70%">
            <Input
              placeholder="새로운 폴더 이름"
              state={folder_name}
              setState={setfolder_name}
            />
          </InputContainerStyle>
          <div className="lastFolder">
            <Gap />

            <KeywordInput
              description="이 폴더에는 이 사람이 보낸 메일만 보여요"
              arrayState={sender}
              setState={setsender}
              placeholder="발신자"
            />
            <Gap small />

            <KeywordInput
              arrayState={keyword}
              setState={setkeyword}
              placeholder="키워드"
              description="해당 키워드가 제목,본문에 포함된 메일만 보여요"
            />
          </div>
          <Gap small />

          <div className="buttonContainer">
            <ButtonStyle
              width="40%"
              height="60px"
              onClick={isEdit ? editFolder : addNewFolder}
            >
              이메일 연동하기
            </ButtonStyle>
          </div>
        </ShadowBox>
      </div>
    </EmailConfigStyle>
  );
}
