import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./front.css";
import Name from "../../components/name/Name";
import weatherr from "../../img/weatherr.png";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Link } from "react-router-dom";

function Front() {
  const [background, setBackground] = useState([]);
  const [time, setTime] = useState([]);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/setBackground/getFrontBg");
      setBackground(req.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/timezone/time");
      setTime(req.data);
      // setInterval(fetchData, 1000);
    }
    fetchData();
  }, []);
  // console.log(time);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/weather/lat&lon");
      setWeather(res.data);
    }
    fetchData();
  }, []);
  // console.log(weather);

  return (
    <div
      className='front-page'
      style={{ backgroundImage: `url(${background.imgUrl})` }}
    >
      <div className='front'>
        {/* <div className='front-top'> */}
        <div className='front-time'>{time.data}</div>
        <div className='front-weather'>
          <img className='front-weather-img' src={weatherr} />
          {weather.data}°F
        </div>
        {/* </div> */}
      </div>

      {/* <div> */}
      <Link to='menu'>
        <KeyboardDoubleArrowUpIcon className='arrow-up' />
      </Link>

      <Name />
      {/* </div> */}
    </div>
  );
}

export default Front;
