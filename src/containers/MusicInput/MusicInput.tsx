import axios from "axios";
import React, { useState } from "react";
import { MainButton } from "../../components";
import { BASE_URL } from "../../config";
import { Props } from "./MusicInput.props";
import { Wrapper } from "./MusicInput.styles";

const MusicInputContainer: React.FC<Props> = (props) => {
  const { lap, setScreenType, bg } = props;
  const [q, setQ] = useState<string>("");
  const [type, setType] = useState<string>("playlist");

  const handleSubmit = () => {
    if (!q) {
      return;
    }
    axios
      .post(`${BASE_URL}/submit`, {
        lap,
        spotify: {
          type,
          q,
        },
      })
      .then(() => {
        setScreenType("main");
      });
  };

  return (
    <Wrapper color={bg}>
      <div className="input-wrapper">
        <select key="type" onSelect={(e) => setType(e.type)}>
          <option key="playlist">Playlist</option>
          <option key="song">Song</option>
          <option key="album">Album</option>
          <option key="artist">Artist</option>
        </select>
        <input key="name" onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="buttons-wrapper">
        <div className="button-wrapper">
          <MainButton text="Cancel" onClick={() => setScreenType("main")} />
        </div>
        <div className="button-wrapper">
          <MainButton text="Save" onClick={handleSubmit} />
        </div>
      </div>
    </Wrapper>
  );
};

export const MusicInput = MusicInputContainer;
export default MusicInput;
