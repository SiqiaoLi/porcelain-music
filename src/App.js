import { useDispatch, useSelector } from "react-redux";
import { loadMusic } from "./actions/musicAction";
import React, { useEffect } from "react";
import Player from "./components/Player";

function App() {
  // fetch music
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMusic());
  }, [dispatch]);

  const hit = useSelector((state) => state.music.hit);

  return (
    <div className="App">
      <Player name={hit.name} artistsname={hit.artistsname} img={hit.picurl} />
      <audio controls src={hit.url}></audio>
    </div>
  );
}

export default App;
