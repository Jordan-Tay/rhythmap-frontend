import { ScreenType } from "../../App";

export type Props = {
  exists?: boolean;
  setScreenType: (type: ScreenType) => void;
  bg: string;
};
