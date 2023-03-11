import React from "react";
import styled from "styled-components";

const MailCompanySelectStyle = styled.div``;
export default function MailCompanySelect({
  title,
  arrayState,
  setState,
  description,
}: {
  title: string;
  arrayState: any[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
  description?: string;
}) {
  return <MailCompanySelectStyle>MailCompanySelect</MailCompanySelectStyle>;
}
