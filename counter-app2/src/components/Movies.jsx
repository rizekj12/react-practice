import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    }
    render() {
        console.log(this.state.movies)
        return (
            <>
                <h1>Movies component</h1>
                <table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Genere</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
    </tr>
  </thead>
  <tbody>
    {this.state.movies.map(movie => (
            <tr>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
            </tr>
        ))}
  </tbody>
</table>
            </>
        );
    }
}

export default Movies;
