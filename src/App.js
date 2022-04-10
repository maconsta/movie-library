import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/header";
import Favorites from "./components/favorites";
import NotFound from "./components/notFound";
import Results from "./components/results";
import MoviePage from "./components/moviePage";

class App extends Component {
  state = {
    movies: [],
    query: "",
    favorites: {},
    review: {},
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();

    if (this.state.query === "") return;

    // using a free CORS proxy - https://cors-anywhere.herokuapp.com/ - Open the link and enroll before using
    const { data: movies } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.tvmaze.com/search/shows?q=" +
        this.state.query
    );

    this.setState({ movies });

    const query = "";
    this.setState({ query });
  };

  handleChange = ({ currentTarget }) => {
    const query = currentTarget.value;
    this.setState({ query });
  };

  clearMovies = () => {
    const movies = [];
    this.setState({ movies });
  };

  handleComment = ({ currentTarget }, movie) => {
    const { id } = movie.show;
    const r = { ...this.state.review };
    r[id].comment = currentTarget.value;
    this.setState({ review: r });
  };

  handleRating = (number, movie) => {
    const { id } = movie.show;
    const r = { ...this.state.review };
    r[id].rating = number;
    this.setState({ review: r });
  };

  addMovieToReview = (movie) => {
    const { id } = movie.show;
    const { review } = this.state;
    if (!(id in review)) {
      const r = { ...review, [id]: { rating: 0, comment: "" } };
      this.setState({ review: r });
    }
  };

  handleFavorites = (movie) => {
    const { favorites } = this.state;
    const { id } = movie.show;

    let f;
    if (id in favorites) {
      f = { ...favorites };
      delete f[id];
    } else {
      f = { ...favorites, [id]: movie };
    }
    this.setState({ favorites: f });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          query={this.state.query}
          favorites={this.state.favorites}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        ></Header>
        <Routes>
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={this.state.favorites}
                handleSubmit={this.handleSubmit}
                clearMovies={this.clearMovies}
              />
            }
          ></Route>
          <Route
            path="/results"
            element={
              <Results
                query={this.state.query}
                movies={this.state.movies}
                favorites={this.state.favorites}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleFavorites={this.handleFavorites}
              />
            }
          ></Route>
          <Route
            path="/moviePage"
            element={
              <MoviePage
                review={this.state.review}
                favorites={this.state.favorites}
                handleComment={this.handleComment}
                handleRating={this.handleRating}
                handleFavorites={this.handleFavorites}
                addMovieToReview={this.addMovieToReview}
              />
            }
          ></Route>
          <Route
            path="/"
            element={
              <Favorites
                favorites={this.state.favorites}
                handleSubmit={this.handleSubmit}
                clearMovies={this.clearMovies}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
