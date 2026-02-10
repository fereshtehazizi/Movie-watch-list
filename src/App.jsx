import { useState } from "react";
import "./App.css";
import AddMovie from "./components/Add movie";
import MovieList from "./components/Movie list";
import Summery from "./components/Summery"

function App() {

  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [src, setSrc] = useState("");
  const [genre, setGenre] = useState("Action");
  const [filter, setFilter] = useState("All");

  const handleAddMovie = (e) => {
    e.preventDefault();

    if(title.trim() === "") return

    const newMovie ={
      id: crypto.randomUUID(),
      title,
      src,
      genre,
      watched: false,
    };

    setMovies([...movies, newMovie]);
    setTitle("");
    setSrc("");
    setGenre("Action");
  };

  const toggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
      movie.id === id 
      ? {...movie, watched: !movie.watched} 
      : movie
      )
    );
  };

   const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const totalMovies = movies.length;
  const watchedCount = movies.filter((m) => m.watched).length;
  const unwatchedCount = totalMovies - watchedCount;

  const filteredMovies = movies.filter((movie) => {
    if(filter === "Watched") return movie.watched;
    if(filter === "Unwatched") return !movie.watched;
    return true;
  });

  return(
  <div className="appContainer">
    <h1 className="headerTitle">Movie Watchlist</h1>
    <div className="content">
      <AddMovie
      title={title}
      setTitle={setTitle}
      src={src}
      setSrc={setSrc}
      genre={genre}
      setGenre={setGenre}
      handleAddMovie={handleAddMovie}
      ></AddMovie>

      <MovieList
      filteredMovies={filteredMovies}
      toggleWatched={toggleWatched}
      deleteMovie={deleteMovie}
      setFilter={setFilter}
      filter={filter}
      ></MovieList>

      <Summery
      totalMovies={totalMovies}
      watchedCount={watchedCount}
      unwatchedCount={unwatchedCount}
      ></Summery>
    </div>
    </div>
  );

}

export default App;
