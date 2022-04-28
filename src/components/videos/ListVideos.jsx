import React, { useContext } from "react";
import { YoutubeContext } from "../../apis/YoutubeContext";
import ListItem from "./ListItem";

const ListVideos = () => {
  let { videos } = useContext(YoutubeContext);
  console.log(videos);
  return (
    <div>
      {videos === null
        ? "Loading!!!"
        : videos.items.map(item => {
            return <ListItem key={item.id.videoId} {...item} id={item} />;
          })}
    </div>
  );
};

export default ListVideos;
