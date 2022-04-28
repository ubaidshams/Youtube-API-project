import React, { lazy } from "react";
import ListVideos from "./ListVideos";
import Player from "./Player";

// let ListVideos = lazy(() => {
//   // import("./ListVideos"); //code splitting
// });
const VideoMain = () => {
  return (
    <section className="w-screen bg-slate-100 py-4 ">
      <article className="w-[95%] m-auto flex">
        <div className="basis-[70%]">
          <Player />
        </div>
        <div className="basis-[30%]">
          <ListVideos />
        </div>
      </article>
    </section>
  );
};

export default VideoMain;
