import { useEffect, useState } from "react";
import { Props } from "./RhythmInput.props";
import { Wrapper } from "./RhythmInput.styles";

const colors = [
  "lightblue",
  "lightgreen",
  "lightgoldenrodyellow",
  "lightpink",
  "lightsalmon",
  "lightcoral",
  "lightskyblue",
  "lightslategrey",
];

const RhythmInputContainer: React.FC<Props> = (props) => {
  const { setLap: setFinalLap, setBg } = props;

  const [time, setTime] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);
  const [lap, setLap] = useState<number[]>([]);

  useEffect(() => {
    let interval: any;
    if (start) {
      setLap([0]);
      interval = setInterval(() => {
        setTime(
          (prev) => Math.round((prev + Number.EPSILON + 0.01) * 100) / 100
        );
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start]);

  useEffect(() => {
    if (time - lap[lap.length - 1] >= 2) {
      setStart(false);
      console.log(lap);
      setFinalLap(lap);
      setBg(colors[(lap.length - 1) % colors.length]);
    }
  }, [time]);

  const handleClick = () => {
    if (!start) {
      setStart(true);
    } else {
      setLap([...lap, time]);
    }
  };

  return (
    <Wrapper
      onClick={handleClick}
      color={
        lap.length === 0 ? "none" : colors[(lap.length - 1) % colors.length]
      }
    />
  );
};

export const RhythmInput = RhythmInputContainer;
export default RhythmInput;
