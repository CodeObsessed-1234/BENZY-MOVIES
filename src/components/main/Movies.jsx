import React from 'react'
import Mov from './Mov'
import "./Movies.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

var movieList = ['https://www.youtube.com/embed/Go8nTmfrQd8', 'https://www.youtube.com/embed/JKa05nyUmuQ']


function Movies(props) {
  useEffect(() => {
    AOS.init();
  }, [])


  let MovieObject = props.movieObject;
  let srcKey = Object.keys(MovieObject)

  let movieSrcArray = [];
  let movieNameArray = [];
  let moviehreflist = [];

  srcKey.forEach((elem) => {
    if (elem == "src") {
      movieSrcArray = MovieObject[elem];
    }
    else if (elem == "ytb"){
      moviehreflist = MovieObject[elem];
    }
    else {
      movieNameArray = MovieObject[elem];
    }
  })


  let movieList = [];

  for (let i = 0; i < movieNameArray.length; i++) {
    movieList.push(<a href={moviehreflist[i]} target="_blank"><Mov src={movieSrcArray[i]} name={movieNameArray[i]} /></a>)
  }

  return (
    <div>
      <div className={props.Type} data-aos={props.style}>
        <h3>{props.TypeName}</h3>
        <div className="mov">
          {movieList}
        </div>
      </div>
    </div>
  )
}

export default Movies