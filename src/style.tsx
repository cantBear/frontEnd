import styled, { css } from "styled-components";

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BorderBox = styled(CenterDiv)`
  border: solid 1px;
`;
export const PageStyleCss = css`
  padding: 60px 40px;
  width: 100%;
  > .title {
    height: 100px;
    /* line-height: 100px; */
  }
  .main {
    display: flex;
    width: 100%;
    height: calc(100% - 100px);
  }
`;
export const ScrollDefault = css`
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 5px;
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 15px solid transparent;
    width: 5px;
    background: rgba(4, 8, 15, 0.3);
    border-radius: 8px;
  }
`;
//  ----Design System
export const LargeTitleTextStyle = styled.span<{
  onClick?: any;
  color?: string;
}>`
  color: ${(props) => (props.color ? props.color : "#547856")};
  font-size: 40px;
  font-weight: 600;
`;
export const SecondTitleTextStyle = styled.span<{
  onClick?: any;
  color?: string;
}>`
  font-size: 18px;
  color: ${(props) => (props.color ? props.color : "#547856")};
  font-weight: 600;
`;
export const SecondGrayTitleTextStyle = styled.span<{
  onClick?: any;
  color?: string;
}>`
  font-size: 18px;
  color: ${(props) => (props.color ? props.color : "#868686")};
  font-weight: 600;
`;
export const StrongSecondTitleTextStyle = styled.span<{
  onClick?: any;
  color?: string;
}>`
  color: ${(props) => (props.color ? props.color : "black")};

  font-size: 16px;
  font-weight: 600;
`;
export const TextStyle = styled.span<{
  onClick?: any;
  color?: string;
}>`
  font-size: 12px;
  color: ${(props) => (props.color ? props.color : "black")};
`;
export const GrayTextStyle = styled.span<{
  onClick?: any;
  color?: string;
}>`
  font-size: 12px;
  color: #c8c8c8;
`;
export const ShadowBox = styled.div<{
  width?: string;
  height?: string;
  isNoShadow?: boolean;
  isStraight?: boolean;
  css?: any;
}>`
  width: calc(${(props) => props.width});
  height: calc(${(props) => props.height});
  padding: 20px 30px;
  border: 1px solid #ececec;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
  border-radius: ${(props) => (props.isStraight ? "0px" : "10px")};
  transition: all 0.3s;
  position: relative;
  ${(props) => props.css};
`;
export const InputContainerStyle = styled.div<{
  width?: string;
  height?: string;
  css?: string;
}>`
  width: calc(${(props) => props.width});
  height: calc(${(props) => (props.height ? props.height : "40px")});
  line-height: calc(${(props) => props.height});
  padding-left: 2px;
  border-bottom: solid 1px #4e4e4e;
  input {
    font-size: 14px;
  }
  ${(props) => props.css}
`;

export const ButtonStyle = styled.div<{
  width?: string;
  height?: string;
  fontSize?: string;
  backgroundColor?: string;
  onClick?: any;
}>`
  width: calc(${(props) => props.width});
  height: calc(${(props) => props.height});
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "13px")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#547856"};
  opacity: 0.85;
  transition: all 0.5s;
  :hover {
    opacity: 1;
    transform: scale(102%);
  }
  cursor: pointer;
`;

export const ActiveBackground = css<{}>`
  position: relative;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    background-color: #547856;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    border-radius: 4px;
    content: " ";
  }
`;

export const Gap = styled.div<{ small?: boolean; rSmall?: boolean }>`
  width: ${(props) => (props.small ? "20px" : props.rSmall ? "5px" : "40px")};
  height: ${(props) => (props.small ? "20px" : props.rSmall ? "5px" : "40px")};
`;
