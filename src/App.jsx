import React, { useState } from "react";
import YoutubeProvider from "./apis/YoutubeContext";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import Navbar from "./components/navbar/Navbar";
import VideoMain from "./components/videos/VideoMain";

const App = () => {
  return (
    <YoutubeProvider>
      <Navbar />
      <LoginModal />
      <SignupModal />
      <VideoMain />
    </YoutubeProvider>
  );
};

export default App;
