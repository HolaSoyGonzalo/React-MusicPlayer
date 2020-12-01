import React, { useState, useEffect } from "react";

//FontAwesome  Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setSongs,
}) => {
  //UseEffect

  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  });
  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skip = async (direction) => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = songs.length - 1;
    } else if (newIndex >= songs.length) {
      newIndex = 0;
    }

    setCurrentSong(songs[newIndex]);
  };

  return (
    <div className="player">
      <div className="time-controls">
        <p>{getTime(songInfo.currentTime)}</p>

        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />

        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-controls">
        <FontAwesomeIcon
          onClick={() => skip(-1)}
          className="back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skip(1)}
          className="forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
