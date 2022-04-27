import ArrowBackOutlined from "@mui/icons-material/ArrowBackOutlined";
import React, { useRef } from "react";
import AudioSpectrum from "react-audio-spectrum";
import { Link, useLocation } from "react-router-dom";
import "./play.css";
// import { useVisualizer, models } from "react-audio-viz";
// import {
//   SpectrumVisualizer,
//   SpectrumVisualizerTheme,
// } from "react-audio-visualizers";
// import ReactAudioPlayer from "react-audio-player";
// import AudioMotionAnalyzer from "audiomotion-analyzer";
// import Swave from "swave"
function Play() {
  const location = useLocation();
  const audio = location.audio;

  const audioRef = React.useRef(null);

  return (
    <div className='play'>
      <Link to='/music'>
        <div className='back'>
          <ArrowBackOutlined style={{ width: "100px", height: "80px" }} />
          Back
        </div>
      </Link>

      <div className='animation'>
        <div class='loader'>
          <span class='stroke'></span>
          <span class='stroke'></span>
          <span class='stroke'></span>
          <span class='stroke'></span>
          <span class='stroke'></span>
          <span class='stroke'></span>
          <span class='stroke'></span>
        </div>
      </div>

      <div className='play-audio'>
        <audio
          controls={true}
          // onPlay={initializeVisualizer}
          // ref={audioRef}
          src={audio.audioUrl}
          autoPlay
        />
        {/* <ReactAudioViz
          model={models.horizontal({
            darkMode: true,
            reversed: false,
            fadeBars: true,
            scale: 1,
            color: "#ffffff",
            binSize: 25,
            frequencyRange: [0, 17000],
          })}
        /> */}
        {/* {ReactAudioViz && <ReactAudioViz model={models.polar()} />} */}
        {/* <AudioSpectrum
          // id='audio-canvas'
          height={200}
          width={300}
          // audioId={"audio-element"}
          capColor={"red"}
          capHeight={2}
          meterWidth={2}
          meterCount={512}
          meterColor={[
            { stop: 0, color: "#f00" },
            { stop: 0.5, color: "#0CD7FD" },
            { stop: 1, color: "red" },
          ]}
          gap={4}
        /> */}
        {/* <SpectrumVisualizer
          // audio={audioLink}
          // src={audio.audioUrl}
          audio="https://mp3-file-upload.s3.ap-southeast-1.amazonaws.com/1649136520153_Bewafai+Kar+Gaya+-+Lekh+320+Kbps.mp3'"
          theme={SpectrumVisualizerTheme.radialSquaredBars}
          colors={["#009688", "#26a69a"]}
          iconsColor='#26a69a'
          backgroundColor='white'
          showMainActionIcon
          showLoaderIcon
          highFrequency={8000}
        /> */}
      </div>
    </div>
  );
}

export default Play;
