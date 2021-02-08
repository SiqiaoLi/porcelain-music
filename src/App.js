import { useDispatch, useSelector } from "react-redux";
import { loadMusic } from "./actions/musicAction";
import React, { useEffect, useRef } from "react";
import Player from "./components/Player";
import SongInfo from "./components/SongInfo";
import Nav from "./components/Nav";
import GlobalStyles from "./components/GlobalStyles";
import { timeUpdate } from "./actions/playerAction";
import { Route } from "react-router-dom";
import SideNav from "./components/SideNav";

function App() {
  const song = useSelector((state) => state.music.song);
  const channel = useSelector((state) => state.channel);
  const isPlaying = useSelector((state) => state.isPlaying);

  const audioRef = useRef(null);

  // fetch music
  const dispatch = useDispatch();

  useEffect(() => {
    async function loading() {
      await dispatch(loadMusic(channel));
      if (isPlaying) {
        audioRef.current.play();
      }
    }
    loading();
  }, [dispatch, channel]);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const percentage = (current / duration) * 100;
    dispatch(timeUpdate({ current, duration, percentage }));
  };

  const songEndHandler = async () => {
    await dispatch(loadMusic(channel));
    audioRef.current.play();
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Route exact path={["/:channel", "/"]}>
        <Nav />
        <SongInfo
          name={song.name}
          artistsname={song.artistsname}
          img={song.picurl}
        />
        <Player audioRef={audioRef} />
        <SideNav />
        <audio
          ref={audioRef}
          src={song.url}
          onLoadedMetadata={timeUpdateHandler}
          onTimeUpdate={timeUpdateHandler}
          onEnded={songEndHandler}
        ></audio>
      </Route>
    </div>
  );
}

export default App;
