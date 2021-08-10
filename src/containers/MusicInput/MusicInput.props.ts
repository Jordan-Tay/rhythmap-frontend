import { ScreenType } from "../../App";

export type Props = {
  lap: number[];
  setScreenType: (type: ScreenType) => void;
  bg: string;
};
