import { useDispatch, useSelector } from "react-redux";
import { loadMusic } from "./actions/musicAction";
import React, { useEffect, useRef } from "react";
import Player from "./components/Player";
import SongInfo from "./components/SongInfo";
import Nav from "./components/Nav";
import GlobalStyles from "./components/GlobalStyles";
import { timeUpdate } from "./actions/playerAction";

function App() {
  const audioRef = useRef(null);

  // fetch music
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMusic());
  }, [dispatch]);

  const hit = useSelector((state) => state.music.hit);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const percentage = (current / duration) * 100;
    dispatch(timeUpdate({ current, duration, percentage }));
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <SongInfo
        name={hit.name}
        artistsname={hit.artistsname}
        img={hit.picurl}
      />
      <Player audioRef={audioRef} />
      <audio
        ref={audioRef}
        src={hit.url}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
      ></audio>
    </div>
  );
}

export default App;
