import { useState } from "react";
import { searchMovies } from "../api/TheMovieDB";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search movies..."
          className="p-2 border rounded w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 text-white rounded shadow p-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded"
            />
            <h2 className="text-lg mt-2">{movie.title}</h2>
            <p className="text-sm">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
