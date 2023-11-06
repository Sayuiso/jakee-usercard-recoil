import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

//共通のcssが当たったBaseButtonに付け加える
const SButton = styled(BaseButton)`
  background-color: #3cb371;
`;
