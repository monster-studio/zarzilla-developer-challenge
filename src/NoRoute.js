import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function NoRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/zarzilla-developer-challenge/1');
  });

}

export default NoRoute