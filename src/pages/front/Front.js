import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./front.css";
import Name from "../../components/name/Name";
import weather2 from "../../img/weather2.png";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Link } from "react-router-dom";

function Front() {
  const [time, setTime] = useState([]);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/timezone/time");
      setTime(req.data);
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
    <div>
      <div className='front'>
        {/* <div className='front-top'> */}
        <div className='front-time'>{time.data}</div>
        <div className='front-weather'>
          <img src={weather2} />
          {weather.data}°F
        </div>
        {/* </div> */}
      </div>

      <div>
        <Link to='menu'>
          <KeyboardDoubleArrowUpIcon className='arrow-up' />
        </Link>

        <Name />
      </div>
    </div>
  );
}

export default Front;
