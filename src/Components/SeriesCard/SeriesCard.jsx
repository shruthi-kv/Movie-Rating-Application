import React from 'react';
import {Link} from 'react-router-dom';
import './SeriesCard.scss';


export default function SeriesCard({key, data}){
  
    return (

       <div className ="card-item"  key={key}> 
          <Link to={`/movie/${data.imdbID}`}>
            <div className="card-inner">
                <div className="card-top">
                    <img
                        src={data.Poster}
                        alt={data.title}
                    />
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h4>{data.Title}</h4>
                        <p>{data.Year}</p>
                    </div>

                </div>
            </div>
        </Link>
       </div>
    )
}