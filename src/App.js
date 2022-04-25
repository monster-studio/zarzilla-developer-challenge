import './App.css';
import React, { useState, useEffect } from 'react';
import TVshow from './TVshow';
import Pagination from '@mui/material/Pagination';
import { useNavigate, useParams } from "react-router-dom";

function App() {
  const [ShowsIDs, setShowsIDs] = useState([]);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigate('/zarzilla-developer-challenge/'+value);
  };

  const { pageNumber } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const pageCoefficient = (30*(pageNumber-1));
    setShowsIDs(Array.from({length:30},(v,k)=>k+1+pageCoefficient));
  }, [navigate]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        <h1>TV Bland</h1>
        <p>
          TV Show and web series database.<br/>
          Create personalised schedules. Episode guide, cast, crew and character information.<br/>
        </p>
        </div>
      </header>
      <section className="App-body">
        <div className="container">
          <h2>Last Added Shows</h2>
        <div className="tv-shows-box">
        {}
        {ShowsIDs.map(ShowsID => <TVshow rating="2.5" showID={ShowsID} key={ShowsID}/>)}

        </div>
        </div>
      </section>
      <section className="App-footer">
      <Pagination page={parseInt(pageNumber)} count={10} onChange={handleChange} />
      </section>
    </div>
  );
}

export default App;
