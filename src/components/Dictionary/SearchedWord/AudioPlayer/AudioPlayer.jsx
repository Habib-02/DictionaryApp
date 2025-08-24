import React from "react";

import styles from "./AudioPlayer.module.css";

import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";

function AudioPlayer({ phonetics }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const audioRef = React.useRef(null);

  const audioSrc = phonetics
    .map((phonetic) => {
      return phonetic.audio;
    })
    .filter((src) => src !== "");

  return (
    <div className="audioPlayer">
      <button
        className={styles.pronounceButton}
        onClick={() => {
          if (isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }

          setIsPlaying(!isPlaying);
        }}
        disabled={audioSrc[0] === undefined}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <audio
        onEnded={() => setIsPlaying(false)}
        ref={audioRef}
        src={audioSrc[0]}
      ></audio>
    </div>
  );
}

export default AudioPlayer;
