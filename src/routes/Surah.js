import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

function Surah() {
  let number = useLocation();

  const [surahs, setSurahs] = useState(number.state);

  const [ayahs, setAyahs] = useState(
    number.state.ayahs.map((item) => item.audio)
  );

  const [isPlay, setIsplay] = useState(false);
  const [num, setNum] = useState(0);

  const play = (inx) => {
    setIsplay(true);
    setNum(inx);
    document.getElementById("player").play();
    document.getElementById("player").autoplay = true;
  };

  const pause = () => {
    setIsplay(false);
    document.getElementById("player").pause();
  };

  const handleEnd = () => {
    setNum(num + 1);
    document.getElementById("player").autoplay = true;
  };

  return (
    <div className="surah">
      <div className="list">
        {surahs ? (
          <>
            <ReactAudioPlayer
              src={ayahs[num]}
              id="player"
              onEnded={handleEnd}
            />

            {surahs.ayahs.map((item, index) => {
              return (
                <div className={`cards  ${index}`} key={item.number}>
                  <div className="inner">
                    <div className="number">
                      <p>{surahs.number}</p>
                      <span>:</span>
                      <p>{item.numberInSurah}</p>
                    </div>
                    <div className="player">
                      <i>
                        {" "}
                        {isPlay && num === index ? (
                          <BsPauseFill onClick={pause} />
                        ) : (
                          <BsFillPlayFill onClick={() => play(index)} />
                        )}
                      </i>
                    </div>
                  </div>
                  <div className="title">
                    <h3
                      style={{ color: isPlay && num === index ? "gold" : "" }}
                      id="text"
                    >
                      {item.text}
                    </h3>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          "Assalamu Alekum choose one of Surahs"
        )}
      </div>
    </div>
  );
}

export default Surah;
