import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import EmailRow from "../molecule/EmailRow";
import MiniFolder from "../molecule/MiniFolder";
import {
  Gap,
  GrayTextStyle,
  LargeTitleTextStyle,
  PageStyleCss,
  ScrollDefault,
  SecondGrayTitleTextStyle,
  SecondTitleTextStyle,
  ShadowBox,
} from "../style";
import { tokenAxios } from "../utility";

const HomeStyle = styled.div`
  ${PageStyleCss}
  .folder {
    height: 30px;
    display: flex;
  }
  .main {
    justify-content: space-between;
    > .leftContainer {
      width: 50%;
    }
    > .rightContainer {
      padding-top: 30px;
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .folderLink {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
      }
      .flex {
        display: flex;
        justify-content: space-between;
        .left {
          .folderRow {
            height: 26px;
            line-height: 26px;
            max-width: 300px;
            overflow-x: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .right {
          .textRow {
            text-align: end;
            height: 26px;
            line-height: 26px;
            color: #547856;
            font-size: 12px;
            font-weight: 600;
          }
        }
      }
    }
  }
`;
export default function Home() {
  const navigate = useNavigate();
  //  MODEL
  interface folderObj {
    id: number;
    user?: number;
    folder_name: string;
    sender: Array<string>;
    keyWorList: Array<string>;
    email_domain: Array<string>;
  }
  interface emailObj {
    id: number;
    sender: string;
    title: string;
    date: string;
    detail?: string;
  }
  const [currentFolder, setcurrentFolder] = useState<folderObj>({
    id: 0,
    folder_name: "all",
    sender: ["all"],
    keyWorList: ["none"],
    email_domain: ["none"],
  });
  const [folderList, setfolderList] = useState<Array<folderObj>>([]);
  const [emailList, setemailList] = useState<Array<emailObj>>([]);

  //  ACTION

  //  VIEW
  const folderUIList = folderList.map((folderObj, i) => (
    <MiniFolder
      key={i}
      name={folderObj.folder_name}
      onClick={() => {
        setcurrentFolder(folderObj);
      }}
      isActive={folderObj.id === currentFolder?.id}
    />
  ));
  const emailUIList = emailList.map((emailObj, i) => (
    <EmailRow
      key={i}
      title={emailObj.title}
      date={emailObj.date}
      from={emailObj.sender}
    />
  ));

  //  BUSINEEE LOGIC

  //  send request on currentFolderChange
  const getEmailList = async (id?: number) => {
    const response = await tokenAxios.get(`imaplists/${id ? id + "/" : ""}`);
    setemailList(response.data || []);
  };
  useEffect(() => {
    getEmailList(currentFolder.id);
  }, [currentFolder]);

  //  getFolderList and set folderlist, currentFolder
  const getFolderList = async () => {
    const response = await tokenAxios.get("myfolders/");
    setfolderList(response.data);
    setcurrentFolder(
      folderList[0] || {
        id: 0,
        folder_name: "all",
        sender: ["all"],
        keyWorList: ["none"],
        email_domain: ["none"],
      }
    );
  };

  useEffect(() => {
    getFolderList();
    getEmailList();
  }, []);
  return (
    <HomeStyle>
      <div className="title">
        <LargeTitleTextStyle>정의헌</LargeTitleTextStyle>
        <SecondGrayTitleTextStyle>님의 메일</SecondGrayTitleTextStyle>
      </div>
      <div className="main">
        <div className="leftContainer">
          <div className="folder">{folderUIList}</div>
          <ShadowBox
            width="100%"
            height="100% - 20px"
            css={`
              border-radius: 0 20px 20px 20px;
              ${ScrollDefault}
            `}
          >
            {emailUIList}
          </ShadowBox>
        </div>

        <div className="rightContainer">
          <ShadowBox width="100%" height="40%">
            <SecondTitleTextStyle>전체</SecondTitleTextStyle>
            <Gap rSmall />
            <GrayTextStyle>
              현재 폴더는 아래 메일을 만족하는 메일만 보여줘요.
            </GrayTextStyle>
            <Gap small />
            <div className="flex">
              <div className="left">
                <div className="folderRow">
                  {currentFolder.sender.map((sender) => `"${sender}", `)}
                </div>
                <div className="folderRow">
                  {currentFolder.keyWorList.map(
                    (keyWorList) => `"${keyWorList}", `
                  )}
                </div>
                <div className="folderRow">
                  {currentFolder.email_domain.map(
                    (email_domain) => `"${email_domain}", `
                  )}
                </div>
              </div>
              <div className="right">
                <div className="textRow">님이 보내신</div>
                <div className="textRow">키워드가 포함된</div>
                <div className="textRow">계정에서 받은 메일</div>
              </div>
            </div>
            <div
              className="folderLink"
              onClick={() => navigate("folder-config")}
            >
              {"폴더 규칙 관리 ->"}
            </div>
          </ShadowBox>
          <ShadowBox width="100%" height="30%"></ShadowBox>
          <ShadowBox width="100%" height="15%"></ShadowBox>
        </div>
      </div>
    </HomeStyle>
  );
}
