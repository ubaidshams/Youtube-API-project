import { createContext, useEffect, useState } from "react";
import Axios, { baseParams } from "./Axios";

export let YoutubeContext = createContext();

const YoutubeProvider = ({ children }) => {
  let [show, setShow] = useState(false);
  let [showSignup, setShowSignup] = useState(false);
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  let [videos, setVideos] = useState(null);
  let [loading, setLoading] = useState(false);
  let [onSelect, setOnSelect] = useState(null);
  useEffect(() => {
    searchText("super cars");
  }, []);
  let searchText = async term => {
    let { data } = await Axios.get("/search", {
      params: {
        q: term,
        ...baseParams,
      },
    });
    setVideos(data);
    setOnSelect(data.items[0]);
    setLoading(true);
  };
  let handleClick = video => {
    setOnSelect(video);
  };

  return (
    <YoutubeContext.Provider
      value={{
        show: show,
        setShow: setShow,
        showSignup: showSignup,
        setShowSignup: setShowSignup,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        searchText: searchText,
        videos: videos,
        loading: loading,
        onSelect: onSelect,
        handleClick: handleClick,
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
export default YoutubeProvider;
