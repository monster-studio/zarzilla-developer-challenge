import React, { useState } from 'react';
import './Show.css';
import LoadingSpinner from './loading-spinner.svg';
import axios from "axios";
import Rating from '@mui/material/Rating';
import BackButton from './back-button.svg';
import { useParams, useNavigate  } from "react-router-dom";


function Show() {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState([]);
  const [showRating, setShowRating] = useState([]);
  const [showName, setShowName] = useState([]);
  const [showSummery, setShowSummery] = useState([]);
  const [streamedOn, setStreamedOn] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [status, setStatus] = useState([]);
  const [genres, setGenres] = useState([]);

  const { id } = useParams(); 

  axios.get(`https://api.tvmaze.com/shows/${id}`)
  .then(res => {
    window.scrollTo(0, 0);
    setShowImage(res.data.image.medium);
    setShowRating(res.data.rating.average/2);
    setShowName(res.data.name);
    setShowSummery(res.data.summary);
    setStreamedOn(res.data.network.name);
    setSchedule(res.data.schedule.days.join(", "));
    setStatus(res.data.status);
    setGenres(res.data.genres.join(", "));
  })
  .catch(error => {
    //console.log(error.response)
  });
    
  return (
    <div className="Show">
      <header className="App-header">
      <div className="container">
      <h1>TV Bland</h1>
      <div className="header-grid">
        <div className="tv-show-image" style={{backgroundImage: `url(${showImage}), url(${LoadingSpinner})`}}></div>
        <div className="tv-show-information">
            <img src={BackButton} width="30" className="back-button" onClick={() => navigate(-1)}></img>
            <div className="rating-container">
                <Rating name="read-only" value={showRating} readOnly size="small"/>
                <span className="rating-text">{showRating}/5</span>
            </div>
            <h2>{showName}</h2>
            <div className="tv-show-summery" dangerouslySetInnerHTML={{__html: showSummery}}></div>
        </div>
      </div>
      </div>
      </header>
      <section className="App-body">
          <div className="show-info">
            <h3>Show Info</h3>

              <div className="show-info-row">
                <div className="show-info-left-col">
                  <h4>Streamed on</h4>
                </div>
                <div className="show-info-right-col">
                  <span>{streamedOn}</span>
                </div>
              </div>

              <div className="show-info-row">
                <div className="show-info-left-col">
                  <h4>Schedule</h4>
                </div>
                <div className="show-info-right-col">
                  <span>{schedule}</span>
                </div>
              </div>

              <div className="show-info-row">
                <div className="show-info-left-col">
                  <h4>Status</h4>
                </div>
                <div className="show-info-right-col">
                  <span>{status}</span>
                </div>
              </div>

              <div className="show-info-row">
                <div className="show-info-left-col">
                  <h4>Genres</h4>
                </div>
                <div className="show-info-right-col">
                  <div>{genres}</div>
                </div>
              </div>

            </div>
          <div className="starring">
          <h3>Starring</h3>

          <div className="starring-row">
                <div className="starring-left-col">
                  <div className="starring-image"></div>
                </div>
                <div className="starring-right-col">
                  <div className="starring-right-col-left-col"><span>Genres</span></div>
                  <div className="starring-right-col-left-col"><span>Genres</span></div>
                </div>
              </div>
          
          </div>
      </section>
    </div>
  )
}

export default Show