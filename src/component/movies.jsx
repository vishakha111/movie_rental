import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from '../component/common/like';
import {Link} from 'react-router-dom';

class Movies extends Component{
    state={
        movies:getMovies()
    }
    deleteMovie=(id)=>{
        this.setState({movies:this.state.movies.filter(movie=>movie._id!==id)})
    }

    handleLike = movie => {
            const movies = [...this.state.movies];
            const index = this.state.movies.indexOf(movie);
            const m = { ...movie };
            m.like = !m.like;
            movies[index]=m;
            //console.log(this.state.movies[index].liked);
            this.setState({ movies });
           
          };
    render(){
        return this.state.movies.length===0 ?(
        <label>There are no movies to show</label>
        ) : (
            <React.Fragment>
                <p>Showing {this.state.movies.length} from database</p>
            <table className='table'>
                <thead>
                    <th>Title</th>
                    <th>numberInStock</th>
                    <th>dailyRentalRate</th>
                    <th>enre</th>
                     <th>Review</th>
                    <th></th>
                </thead>
                <tbody>
                    {this.state.movies.map(movie=>(
                        <tr key={movie._id}>
                            <td>
                                <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                            </td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>{movie.genre.name}</td>
                            <td><Like
                                    liked={movie.like} onlikeToggle={()=>this.handleLike(movie)}/>
                            </td>
                            <td><button onClick={()=>this.deleteMovie(movie._id)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </React.Fragment>
        );
    }
}

export default Movies;