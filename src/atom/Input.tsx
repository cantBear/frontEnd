import React, { useRef, useEffect, Dispatch, SetStateAction } from "react";

import styled from "styled-components";

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
  //date type
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

export default function Input({
  width,
  height,
  placeholder,
  state,
  setState,
  name,
  color,
  type,
  fontSize,
  readOnly,
}: {
  width?: string;
  height?: string;
  placeholder?: string;
  state: string;
  setState?: Dispatch<SetStateAction<any>>;
  name?: string;
  color?: string;
  type?: string;
  fontSize?: string;
  readOnly?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setState) {
      setState(e.target.value);
    }
  };

  return (
    <InputStyle
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      placeholder={placeholder}
      onChange={handleText}
      name={name}
      ref={inputRef}
      type={type}
      readOnly={readOnly}
    />
  );
}
