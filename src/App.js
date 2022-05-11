import { useDispatch, useSelector } from "react-redux";
import { loadMusic } from "./actions/musicAction";
import React, { useEffect, useRef } from "react";
import Player from "./components/Player";
import SongInfo from "./components/SongInfo";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";
import { timeUpdate } from "./actions/playerAction";
import SideNav from "./components/SideNav";

function App() {
  const song = useSelector((state) => state.music.song);
  const channel = useSelector((state) => state.channel);
  const isPlaying = useSelector((state) => state.isPlaying);
  const sideNavStatus = useSelector((state) => state.navStatus);

  const audioRef = useRef(null);

  // fetch music
  const dispatch = useDispatch();

  useEffect(() => {
    async function loading() {
      await dispatch(loadMusic(channel));
      if (isPlaying) {
        audioRef.current.play().catch((e) => console.log(e));
      }
    }
    loading();
    // eslint-disable-next-line
  }, [dispatch, channel]);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const percentage = (current / duration) * 100;
    dispatch(timeUpdate({ current, duration, percentage }));
  };

  const songEndHandler = async () => {
    await dispatch(loadMusic(channel));
    audioRef.current.play().catch((e) => console.log(e));
  };

  return (
    <div className={`App ${sideNavStatus ? "side-open" : ""}`}>
      <GlobalStyles />
      <div className="content-wrap">
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
