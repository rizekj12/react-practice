import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    arrayItemRemovale = (array, item) => {
        let itemIndex = array.indexOf(item)
        array.splice(itemIndex, 1)
        return array
    }

    deleteMovie = movie => {
        this.setState(this.arrayItemRemovale(this.state.movies, movie))
    }

    //another way to delete from a list using state
    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({ movies })
    }

    render() {
        const { length: moviesCount } = this.state.movies
        if (moviesCount === 0)
            return <p>There are no movies in the database.</p>

        return (
            <>
                <p>Showing {moviesCount} Movies</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genere</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => {
                            if (this.state.movies.length === 0) return <p>There are no movies</p>
                            return <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger">Delete</button></td>
                                {/* <td><button onClick={() => this.deleteMovie(movie)} className="btn btn-danger">Delete</button></td> */}
                            </tr>
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Movies;
