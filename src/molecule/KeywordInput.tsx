import React, { Dispatch, SetStateAction, useRef } from "react";
import styled from "styled-components";
import { Gap, GrayTextStyle, InputContainerStyle } from "../style";

const KeywordInputStyle = styled.div`
  height: max-content;
  width: 100%;
  .flex {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-content: space-around;
    justify-items: stretch;
    gap: 8px;
  }
`;
const RoundBoxStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  height: 30px;
  align-items: center;
  max-width: 80px;
  border-radius: 20px;
  flex-shrink: 1;
  border: solid 1px;
  .name {
    line-height: 30px;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 11px;
  }
  .del {
    line-height: 30px;
    cursor: pointer;
  }
`;
const InputStyle = styled.input<{
  fontSize?: string;
  width?: string;
  height?: string;
  color?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}>`
  width: calc(${(props) => (props.width ? props.width : "100%")});
  height: calc(${(props) => (props.height ? props.height : "100%")});
  border: none;
  background-color: transparent;

  color: ${(props) => props.color};

  font-size: ${(props) =>
    props.fontSize ? props.fontSize : `calc((${props.height}) / 5 * 2.2)`};
  ::placeholder {
    color: ${(props) => props.color};
    font-weight: 100;
  }
  :focus {
    outline-width: 0;
  }
  outline-width: 0;

  :focus::placeholder {
    color: transparent;
  }
  ${(props) =>
    props.value
      ? ""
      : `::-webkit-datetime-edit-text {
      -webkit-appearance: none;
      display: none;
    }
    ::-webkit-datetime-edit-month-field {
      -webkit-appearance: none;
      display: none;
    }
    ::-webkit-datetime-edit-day-field {
      -webkit-appearance: none;
      display: none;
    }
    ::-webkit-datetime-edit-year-field {
      -webkit-appearance: none;
      display: none;
    }`}
`;

export default function KeywordInput({
  arrayState,
  setState,
  isDelete = true,
  placeholder,
  description,
}: {
  arrayState: any[];
  setState?: Dispatch<SetStateAction<any>>;
  isDelete?: boolean;
  placeholder: string;
  description?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  let timer: any;
  const handleText = (e: any) => {
    e.preventDefault();

    // uncontrolled input으로 사용을 하면서, 디바운서를 이용해 200ms동안 입력이 없을 경우 setstate를 진행
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      if (setState) {
        setState([...arrayState, e.target.value]);
        e.target.value = "";
      }
    }, 1000);
  };
  const deleteOneState = (i: number) => {
    const delFunc = () => {
      const tmpArr = [...arrayState];
      tmpArr.splice(i, 1);
      if (setState) {
        setState(tmpArr);
      }
    };
    return delFunc;
  };
  return (
    <KeywordInputStyle>
      <div className="flex">
        <InputContainerStyle width="50%" css="min-width:100px;">
          <InputStyle
            onChange={handleText}
            ref={inputRef}
            placeholder={placeholder}
          />
        </InputContainerStyle>
        {arrayState.map((oneState, i) => (
          <RoundBoxStyle key={i}>
            <div className="name" title={oneState}>
              {oneState}{" "}
            </div>
            {isDelete && (
              <div className="del" onClick={deleteOneState(i)}>
                x
              </div>
            )}
          </RoundBoxStyle>
        ))}
      </div>
      <Gap rSmall />

      <GrayTextStyle>{description}</GrayTextStyle>
    </KeywordInputStyle>
  );
}
