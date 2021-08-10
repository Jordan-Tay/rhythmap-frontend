import { useState } from "react";
import { RhythmInput } from "..";
import { MainButton } from "../../components";
import { Wrapper } from "./MainScreen.styles";
import { Props } from "./MainScreen.props";

const MainScreenContainer: React.FC<Props> = (props) => {
  const { setScreenType, setRhythmType } = props;

  const handleNewRhythm = () => {
    setScreenType("stopwatch");
    setRhythmType("new");
  };

  const handleOldRhythm = () => {
    setScreenType("stopwatch");
    setRhythmType("old");
  };

  return (
    <Wrapper>
      <div className="buttons-wrapper">
        <MainButton text="New Rhythm" onClick={handleNewRhythm} />
        <MainButton text="Use Rhythm" onClick={handleOldRhythm} />
      </div>
    </Wrapper>
  );
};

export const MainScreen = MainScreenContainer;
export default MainScreen;
