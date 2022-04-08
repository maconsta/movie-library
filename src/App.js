import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/header";
import Favorites from "./components/favorites";
import NotFound from "./components/notFound";
import Results from "./components/results";
import MoviePage from "./components/moviePage";

class App extends Component {
  state = { movies: [], query: "", favorites: [] };

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

  render() {
    return (
      <React.Fragment>
        <Header
          query={this.state.query}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          enableHero={this.enableHero}
        ></Header>
        <Routes>
          <Route
            path="/favorites"
            element={
              <Favorites
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
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            }
          ></Route>
          <Route path="/moviePage" element={<MoviePage />}></Route>
          <Route
            path="/"
            element={
              <Favorites
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
