import { MainButton } from "../../components";
import { Props } from "./Playing.props";
import { Wrapper } from "./Playing.styles";

const PlayingContainer: React.FC<Props> = (props) => {
  const { type, name, setScreenType, bg } = props;

  return (
    <Wrapper color={bg}>
      <div className="wrapper">
        <div className="text-wrapper">
          Playing {type}: {name}...
        </div>
        <MainButton text="Home" onClick={() => setScreenType("main")} />
      </div>
    </Wrapper>
  );
};

export const Playing = PlayingContainer;
export default Playing;
