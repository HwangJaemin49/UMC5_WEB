// import React from "react"
// import { useNavigate } from "react-router-dom";

// export const BASE_URL = "https://image.tmdb.org/t/p/w1280/";

// // function Movie({title, poster_path, vote_average, overview}) {
// //     const [hide, setHide] = useState(true);
// //     const handleMouseOver = () => {
// //         setHide(false);
// //         console.log('mouseON');
// //     }
// //     const handleMouseOut = () => {
// //         setHide(true);
// //         console.log('mouseOUT');
// //     }

// //     return(
// //          <div
// //             className= "movie-container"
// //             onMouseOver={handleMouseOver}
// //             onMouseOut={handleMouseOut}
// //             >
            
// //             <img src={BASE_URL + poster_path} alt="영화 포스터" />
// //             <div className="movie-info">
// //                 <h4>{title}</h4>
// //                 <span>{vote_average}</span>
// //             </div>
// //             <div 
// //                 className= {`movie-overview ${hide ? 'hide' : ''}`}
// //             >
// //                 <h4>{title}</h4>
// //                 <p>{overview}</p>

// //             </div>
// //         </div>
        
// //     );
// // }

// // export default Movie;



// export default function Movie({ title, poster_path, vote_average, overview }) {
//     const nevigate = useNavigate();

//     const onclickMovieItem = () => {
//         nevigate(`/movie/${title}`,{
//             state: title, poster_path, vote_average, overview
//         })
//     }
//     return (
//         <div className="movie-container" onClick={onclickMovieItem}>
//             <img src={BASE_URL + poster_path} alt="영화포스터" />
//             <div className="movie-info">
//                 <h4>{title}</h4>
//                 <span>{vote_average}</span>
//             </div>
//         </div>
//     )
// }

import React from 'react'
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {
    const navigate = useNavigate();

    const onClickMovieItem = () => {
        navigate(`/movie/${props.title}`, {
            state: props,
        });
    };

    return (
        <div className="movie-container" onClick={onClickMovieItem}>
            <img src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
            <div className="movie-info">
            <h4>{props.title}</h4>
            <span>{props.vote_average}</span>
            </div>
        </div>
        );
}