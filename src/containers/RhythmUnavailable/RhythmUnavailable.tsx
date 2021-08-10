import { MainButton } from "../../components";
import { Props } from "./RhythmUnavailable.props";
import { Wrapper } from "./RhythmUnavailable.styles";

const RhythmUnavailableContainer: React.FC<Props> = (props) => {
  const { exists = false, setScreenType, bg } = props;
  return (
    <Wrapper color={bg}>
      <div className="wrapper">
        <div className="text-wrapper">
          Rhythm {exists ? "already exists" : "doesn't exist"}.
        </div>
        <MainButton text="Home" onClick={() => setScreenType("main")} />
      </div>
    </Wrapper>
  );
};

export const RhythmUnavailable = RhythmUnavailableContainer;
export default RhythmUnavailable;
