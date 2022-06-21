import React, { Component } from "react";
import MovieCard from "./MovieCard";
import { apiKey } from "../Constants/api.js";

class MovieInformation extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {}, query: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchMovie(title) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`
    )
      .then((response) => response.json())
      .then((myJson) => this.setState({ movie: myJson.results[0] }));
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
    console.log(this.state.query);
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.query);
    this.fetchMovie(this.state.query);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
              placeholder="Search movie title"
            />
          </label>
          <input type="submit" value="Search" />
        </form>
        <MovieCard movie={this.state.movie} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchMovie("Forrest Gump");
  }
}

export default MovieInformation;
