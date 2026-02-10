export default function MovieList({filteredMovies, toggleWatched, deleteMovie, setFilter, filter}){
    return(

        <section>
            <h1 className="headSubtitle">Movie List</h1>
            <div className="header">
                <div className="rightside">
                <p>Find your movies here</p>
                </div>
                <div className="leftside">
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">All Movies</option>
                        <option value="Watched">Watched Movies</option>
                        <option value="Unwatched">Unwatched Movies</option>
                    </select>
                </div>
            </div>

            <ul>
                {filteredMovies.map((movie) => (
                    <li key={movie.id} className="movieCard">
                            <img src={movie.src} alt={movie.title} className="img" />
                            <h3>{movie.title}</h3>
                            <p>Genre: {movie.genre}</p>
                            <p>Status: {movie.watched ? "watched" : "Unwatched"}</p>
                            <div>
                                <button onClick={() => toggleWatched(movie.id)} disabled={movie.watched}>{movie.watched ? "Watched" : "Mark Watched"}</button>
                                <button onClick={() => deleteMovie(movie.id)}><i className="fa fa-trash"></i></button>
                            </div>
                    </li>
                ))}
            </ul>
            

        </section>
    )
}