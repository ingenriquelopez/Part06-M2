import { ADD_MOVIE_FAVORITE, GET_MOVIES, REMOVE_MOVIE_FAVORITE ,GET_MOVIE_DETAIL} from "../action-types";
    
const API_KEY = '955eb582';

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, 
             payload };
  }
  

export function removeMovieFavorite(id) {
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload:id 
  }
}
//function para el dispatch
function getMoviesComplete(movies) {
    return {
        type: GET_MOVIES,
        payload: movies
    }
}

  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`)
        .then(response => response.json())
        .then(responseObject => {
          dispatch(getMoviesComplete(responseObject) );
        });
    };
  }

export function getMovieDetail(id) {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(response => response.json())
      .then(objectMovie => {
        dispatch( {
          type: GET_MOVIE_DETAIL,
          payload: objectMovie
        })
      });
  };
}