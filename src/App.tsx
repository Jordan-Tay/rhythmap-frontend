import axios from "axios";
import { useEffect, useState } from "react";
import { Wrapper, Background } from "./App.styles";
import { BASE_URL, SPOTIFY_SEARCH_API } from "./config";
import {
  MainScreen,
  MusicInput,
  Playing,
  RhythmInput,
  RhythmUnavailable,
} from "./containers";

export type ScreenType =
  | "main"
  | "stopwatch"
  | "unavailable"
  | "unavailable-exists"
  | "music-input"
  | "playing";
export type RhythmType = "new" | "old";

const App = () => {
  const [screenType, setScreenType] = useState<ScreenType>("main");
  const [rhythmType, setRhythmType] = useState<RhythmType>("new");
  const [lap, setLap] = useState<number[]>([]);
  const [bg, setBg] = useState<string>("");

  const [musicType, setMusicType] = useState<string>("");
  const [musicName, setMusicName] = useState<string>("");

  useEffect(() => {
    if (lap.length === 0) {
      return;
    }
    console.log(lap);
    axios.post(`${BASE_URL}/test`, { lap }).then(({ data }) => {
      console.log(data);
      if (rhythmType === "new") {
        if (data) {
          setScreenType("unavailable-exists");
        } else {
          setLap(lap);
          setScreenType("music-input");
        }
      } else if (rhythmType === "old") {
        if (data) {
          axios
            .post(`${BASE_URL}/getAccessToken`, data)
            .then(({ data: token }) => {
              const { q, type } = data;
              axios
                .get(SPOTIFY_SEARCH_API, {
                  params: {
                    q: q,
                    type: type,
                    limit: 10,
                  },
                  headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                  },
                })
                .then(
                  ({
                    data: {
                      playlists: { items },
                    },
                  }) => {
                    const url =
                      items?.[Math.floor(Math.random() * items.length)]
                        ?.external_urls?.spotify;
                    const uri =
                      items?.[Math.floor(Math.random() * items.length)]?.uri;
                    console.log(url);
                    window.open(uri);
                  }
                );
            });
          setScreenType("playing");
          setMusicType(data.type);
          setMusicName(data.q);
        } else {
          setScreenType("unavailable");
        }
      }
    });
  }, [lap]);

  const renderScreen = () => {
    switch (screenType) {
      case "main":
        return (
          <MainScreen
            setScreenType={setScreenType}
            setRhythmType={setRhythmType}
          />
        );
      case "stopwatch":
        return <RhythmInput setLap={setLap} setBg={setBg} />;
      case "unavailable":
        return <RhythmUnavailable setScreenType={setScreenType} bg={bg} />;
      case "unavailable-exists":
        return (
          <RhythmUnavailable exists setScreenType={setScreenType} bg={bg} />
        );
      case "music-input":
        return <MusicInput lap={lap} setScreenType={setScreenType} bg={bg} />;
      case "playing":
        return (
          <Playing
            type={musicType}
            name={musicName}
            setScreenType={setScreenType}
            bg={bg}
          />
        );
    }
  };

  return (
    <Wrapper>
      {(screenType === "main" || screenType === "stopwatch") && <Background />}
      {renderScreen()}
    </Wrapper>
  );
};

export default App;
