import { YouTube } from "@mui/icons-material";
import React, { useContext } from "react";
import Moment from "react-moment";
import { YoutubeContext } from "../../apis/YoutubeContext";

const ListItem = ({ snippet, id }) => {
  let { publishedAt, channelId, title, description, thumbnails, channelTitle } =
    snippet;
  let { handleClick } = useContext(YoutubeContext);
  return (
    <div
      className="thumbNails flex items-center cursor-pointer"
      onClick={() => {
        handleClick(id);
      }}
    >
      <figure className="basis-[40%]">
        <img src={thumbnails.medium.url} alt={title} className="p-2" />
      </figure>
      <main className="basis-[60%]">
        <h3>{title.slice(0, 25) + "..."}</h3>
        <h5>{channelTitle}</h5>
        {/* <p>{description}</p> */}
        <p>
          <Moment fromNow>{publishedAt}</Moment>
        </p>
      </main>
    </div>
  );
};

export default ListItem;
