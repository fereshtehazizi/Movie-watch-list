export default function AddMovie({ title, setTitle, genre, setGenre, setSrc, handleAddMovie,
}) {

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            setSrc(reader.result);
        };

        reader.readAsDataURL(file);
    };


    return (
        <section>
            <h1 className="headSubtitle">Add Movie</h1>

            <form onSubmit={handleAddMovie}>

                <label htmlFor="title">Movie Title</label>
                <input
                    id="title"
                    type="text"
                    placeholder="Movie Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className="inputRow">
                    <div className="inputGroup">

                        <label htmlFor="imageFile">Upload Image</label>
                        <input
                            id="imageFile"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="inputGroup">

                        <label htmlFor="genre">Genre</label>
                        <select
                            id="genre"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        >
                            <option>Action</option>
                            <option>Drama</option>
                            <option>Comedy</option>
                            <option>Mystery</option>
                            <option>Sci-Fi</option>
                            <option>Animation</option>
                        </select>
                    </div>
                </div>
                <button type="submit">Add Movie</button>
            </form>
        </section>
    );
}
