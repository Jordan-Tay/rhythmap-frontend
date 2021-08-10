import { ScreenType } from "../../App";

export type Props = {
  type: string;
  name: string;
  setScreenType: (type: ScreenType) => void;
  bg: string;
};
