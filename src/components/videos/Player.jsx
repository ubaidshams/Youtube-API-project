import { YouTube } from "@mui/icons-material";
import React, { useContext } from "react";
import { YoutubeContext } from "../../apis/YoutubeContext";

const Player = () => {
  let { onSelect } = useContext(YoutubeContext);
  console.log(onSelect);
  if (!onSelect) {
    return <h2>Loading!!!</h2>;
  } else {
    return (
      <div>
        <iframe
          width="100%"
          height="600"
          src={`https://www.youtube.com/embed/${onSelect.id.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
};

export default Player;
