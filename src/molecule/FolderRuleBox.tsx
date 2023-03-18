import React from "react";
import styled from "styled-components";
import { SecondTitleTextStyle, ShadowBox } from "../style";

const BoxStyle = styled(ShadowBox)`
  position: relative;
  .title {
    border-bottom: solid 1px #b8b8b8;
    height: 30px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    border: calc(100% - 42px);
    padding: 12px 0;
    .left {
      .textRow {
        height: 28px;
        line-height: 28px;
        color: #547856;
        font-size: 12px;
        font-weight: 600;
        text-align: start;
      }
    }
    .right {
      .folderRow {
        height: 28px;
        line-height: 28px;
        max-width: 300px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .onClick {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;
export default function FolderRuleBox({
  name,
  sender,
  keyword,
  onClick,
}: {
  name: string;
  sender: string[];
  keyword: string[];
  onClick?: any;
}) {
  return (
    <BoxStyle width="48%" height="160px">
      <div className="title">
        <SecondTitleTextStyle>{name}</SecondTitleTextStyle>
      </div>
      <div className="flex">
        <div className="left">
          <div className="textRow">발신자</div>
          <div className="textRow">키워드</div>
          <div className="textRow">메일</div>
        </div>
        <div className="right">
          <div className="folderRow">
            {sender?.map((sender) => `"${sender}", `)}
          </div>
          <div className="folderRow">
            {keyword?.map((keyword) => `"${keyword}", `)}
          </div>
        </div>
      </div>
      <div className="onClick" onClick={onClick}>
        수정 {">"}
      </div>
    </BoxStyle>
  );
}
