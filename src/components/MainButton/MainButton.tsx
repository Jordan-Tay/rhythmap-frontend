import React from "react";
import { Props } from "./MainButton.props";
import { Button } from "./MainButton.styles";

const MainButtonComponent: React.FC<Props> = (props) => {
  const { text, onClick } = props;
  return <Button onClick={onClick}>{text}</Button>;
};

export const MainButton = MainButtonComponent;
export default MainButton;
