export default function Summery({totalMovies, watchedCount, unwatchedCount}){
    return(
        <section className="summery">
            <h1 className="headSubtitle">Summery</h1>
            {unwatchedCount === 0 && totalMovies > 0 &&(
            <p>You have watched everything!</p>
        )}
        <p>Total movies: {totalMovies}</p>
        <p>Watched movies: {watchedCount}</p>
        <p>Unwatched movies: {unwatchedCount}</p>
        
        </section>
    );
}