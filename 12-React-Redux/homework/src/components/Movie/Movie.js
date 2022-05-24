import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getMovieDetail(id);
        console.log(this.props.detalleMovie);
    }
    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula  
                <p>{this.props.detalleMovie.Title}</p>
                <p>{this.props.detalleMovie.Year}</p>
                <p>{this.props.detalleMovie.Release}</p>
                <p>{this.props.detalleMovie.Plot}</p>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
      detalleMovie: state.movieDetail
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      
    };
  }
  
  export default connect( mapStateToProps,{getMovieDetail} )(Movie);
  