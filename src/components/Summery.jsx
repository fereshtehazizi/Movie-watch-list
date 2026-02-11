export default function Summery({totalMovies, watchedCount, unwatchedCount}){
    return(
        <section className="summery">
            <h1 className="headSubtitle">Stats</h1>
        <div className="stats">
        <div className="statsTotal">
            <span>{totalMovies}</span>
            <span>Total Movies</span>
        </div>
        <div className="statsWatched">
            <span>{watchedCount}</span>
            <span>Have Watched</span>
        </div>
        <div className="statsUnwatched">
            <span>{unwatchedCount}</span>
            <span>To Watch</span>
        </div>
        </div>
        
        </section>
    );
}
