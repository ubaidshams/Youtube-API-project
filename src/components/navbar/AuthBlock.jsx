import React, { useContext, useState } from "react";

import Avatar from "./Avatar";

import { YoutubeContext } from "../../apis/YoutubeContext";

const AuthBlock = () => {
  let { setShow, isLoggedIn } = useContext(YoutubeContext);

  return (
    <div className="basis-[20%] flex items-center justify-around">
      <div className="authBlock w-full flex justify-around">
        {isLoggedIn ? (
          <>
            <a title="Create">
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                className="style-scope yt-icon"
                style={{
                  pointerEvents: "none",
                  display: "block",
                  width: "50%",
                  height: "100%",
                }}
              >
                <g className="style-scope yt-icon">
                  <path
                    d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
                    className="style-scope yt-icon"
                  />
                </g>
              </svg>
            </a>
            <a title="YouTube Apps">
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                className="style-scope yt-icon"
                style={{
                  pointerEvents: "none",
                  display: "block",
                  width: "28%",
                  height: "100%",
                }}
              >
                <g className="style-scope yt-icon">
                  <path
                    d="M16,4v4h4V4H16z M19,7h-2V5h2V7z M16,10v4h4v-4H16z M19,13h-2v-2h2V13z M10,4v4h4V4H10z M13,7h-2V5h2V7z M10,10v4h4v-4H10z M13,13h-2v-2h2V13z M16,16v4h4v-4H16z M19,19h-2v-2h2V19z M10,16v4h4v-4H10z M13,19h-2v-2h2V19z M4,4v4h4V4H4z M7,7H5V5h2V7z M4,10 v4h4v-4H4z M7,13H5v-2h2V13z M4,16v4h4v-4H4z M7,19H5v-2h2V19z"
                    className="style-scope yt-icon"
                  />
                </g>
              </svg>
            </a>
            <a title="Notifications">
              {" "}
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                className="style-scope yt-icon"
                style={{
                  pointerEvents: "none",
                  display: "block",
                  width: "28%",
                  height: "100%",
                }}
              >
                <g className="style-scope yt-icon">
                  <path
                    d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
                    className="style-scope yt-icon"
                  />
                </g>
              </svg>
            </a>
            <a></a>
          </>
        ) : (
          <>
            <a title="YouTube Apps">
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                className="style-scope yt-icon"
                style={{
                  pointerEvents: "none",
                  display: "block",
                  width: "30%",
                  height: "100%",
                }}
              >
                <g className="style-scope yt-icon">
                  <path
                    d="M16,4v4h4V4H16z M19,7h-2V5h2V7z M16,10v4h4v-4H16z M19,13h-2v-2h2V13z M10,4v4h4V4H10z M13,7h-2V5h2V7z M10,10v4h4v-4H10z M13,13h-2v-2h2V13z M16,16v4h4v-4H16z M19,19h-2v-2h2V19z M10,16v4h4v-4H10z M13,19h-2v-2h2V19z M4,4v4h4V4H4z M7,7H5V5h2V7z M4,10 v4h4v-4H4z M7,13H5v-2h2V13z M4,16v4h4v-4H4z M7,19H5v-2h2V19z"
                    className="style-scope yt-icon"
                  />
                </g>
              </svg>
            </a>
            <a>
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                className="style-scope yt-icon"
                style={{
                  pointerEvents: "none",
                  display: "block",
                  width: "30%",
                  height: "100%",
                }}
              >
                <g className="style-scope yt-icon" title="Settings">
                  <path
                    d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
                    className="style-scope yt-icon"
                  />
                </g>
              </svg>
            </a>
            <button
              onClick={() => {
                setShow(true);
              }}
              className="flex border border-[#065fd4] items-center justify-evenly p-2 text-[#065fd4] rounded-sm capitalize font-bold"
            >
              <Avatar />
              <span>sign in</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthBlock;
