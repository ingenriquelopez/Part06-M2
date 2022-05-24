import { ADD_MOVIE_FAVORITE, GET_MOVIES, REMOVE_MOVIE_FAVORITE, GET_MOVIE_DETAIL } from "../action-types";

const initialState = {
      moviesFavourites: [],
      moviesLoaded: [],
      movieDetail: {}
  };

  function rootReducer(state = initialState, action) {
      switch (action.type) {
          case ADD_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.concat(action.payload)
              }
          case GET_MOVIES:
            return {
                ...state,
                moviesLoaded: action.payload.Search
              };
          case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter((pelicula)=> pelicula.id !== action.payload)
              }
          case GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.payload
              }
    

            default: return state;
        
    }
  }
  
  export default rootReducer;