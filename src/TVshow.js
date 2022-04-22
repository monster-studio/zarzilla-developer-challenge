import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import './TVshow.css';
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingSpinner from './loading-spinner.svg';

function TVshow(props) {
  const [showImage, setShowImage] = useState([]);
  const [showRating, setShowRating] = useState([]);
  const [showName, setShowName] = useState([]);

  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  axios.get(`https://api.tvmaze.com/shows/${props.showID}`)
  .then(res => {
    setShowImage(res.data.image.medium);
    setShowRating(res.data.rating.average/2);
    setShowName(res.data.name);
  })
  .catch(error => {
    //console.log(error.response)
  });

  return (
    <Link to={`/show/${props.showID}`} className="tv-show">
    <div className="tv-show-image" style={{backgroundImage: `url(${showImage}), url(${LoadingSpinner})`}}></div>
    <Rating name="read-only" value={showRating} readOnly size="small"/>
    <h3>{showName}</h3>
  </Link>
  )
}

export default TVshow