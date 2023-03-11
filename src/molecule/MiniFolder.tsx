import React from "react";
import styled from "styled-components";

const MinifolderStyle = styled.div<{ isActive: Boolean }>`
  border-radius: 6px 6px 0 0;
  height: 30px;
  width: 60px;
  line-height: 30px;
  text-align: center;
  background-color: ${(props) => (props.isActive ? "white" : "#e2e2e2")};
  color: #547856;
  font-weight: 600;
  border: solid 1px #d8d8d8;
`;
export default function MiniFolder({
  name,
  onClick,
  isActive,
}: {
  name: string;
  onClick: any;
  isActive: boolean;
}) {
  return <MinifolderStyle isActive={isActive}>{name}</MinifolderStyle>;
}
