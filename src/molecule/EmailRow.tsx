import React from "react";
import styled from "styled-components";

const EmailRowStyle = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: solid 1px #d8d8d8;
  .flex {
    display: flex;
    justify-content: space-between;

    .title {
      font-weight: 600;
    }
  }
`;
export default function EmailRow({
  title,
  from,
  date,
  onClick,
}: {
  title: string;
  from: string;
  date: string;
  onClick?: any;
}) {
  return (
    <EmailRowStyle>
      <div className="from">{`"${from}"`}</div>

      <div className="flex">
        <div className="title">{title}</div>

        <div className="right">{date}</div>
      </div>
    </EmailRowStyle>
  );
}
