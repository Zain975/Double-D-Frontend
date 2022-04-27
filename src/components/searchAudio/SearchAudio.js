import React, { useEffect, useState } from "react";
import "../searchMedia/search.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "../../axios";
import { Link } from "react-router-dom";

function SearchAudio() {
  const [query, setQuery] = useState("");

  const [audio, setAudio] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/uploads/audiolistt");
      setAudio(req.data);
    }
    fetchData();
  }, []);

  return (
    <div className='search'>
      <div className='search-container'>
        <input
          // type='text'
          placeholder='Search'
          className='search-input'
          key='random1'
          // value={keyword}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchIcon style={{ color: "gray", fontSize: "70px" }} />
      </div>
      <div className='search-item'>
        {audio
          .filter((aud) => {
            if (query === "") {
              return;
            } else if (aud.title.toLowerCase().includes(query.toLowerCase())) {
              return aud;
            }
          })
          .map((aud, index) => (
            <div className='search-box' key={index}>
              <Link to={{ pathname: `/play/${aud._id}`, audio: aud }}>
                <p>{aud.title}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchAudio;
