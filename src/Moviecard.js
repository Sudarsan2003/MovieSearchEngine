import React from "react";
import Tilt from "react-parallax-tilt";

function Moviecard(props) {
  const defaultImage = "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk="; 

  return (
    <div className="col">
      <div className="card h-100 movie-card">
        <Tilt 
          tiltMaxAngleX={20} 
          tiltMaxAngleY={20} 
          perspective={1000} 
          scale={1.05} 
          transitionSpeed={1000}
        >
          <img
            src={
              props.poster_path
                ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.poster_path}`
                : defaultImage
            }
            className="card-img-top movie-img"
            alt={props.title || "Movie Poster"}
          />
        </Tilt>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.overview.slice(0, 150)}</p>
        </div>
      </div>
    </div>
  );
}

export default Moviecard;
