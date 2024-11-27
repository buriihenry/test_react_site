import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import '../css/Home.css';



function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]);
    const [error, setError] = useEffect(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies)
            }catch (err){
                console.log(err)
                setError("Failed to load Movies...")
            }
            finally{
                setLoading(false)
            }
        } 
        loadPopularMovies()
    } , []);


    const handleSearch = () => {
        e.preventDefault()
        alert(searchQuery)
        
    };
    
    return (
    <div className="home">
        <form onSubmit={handleSearch}className="search-form">
        <input 
            type ="text" 
            placeholder="Search for a movie" 
            className="search-input"
            value = {searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}>

        </input>
        <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard movie = {movie} key = {movie.id}/>
                ))}
        </div>
    </div>
    );
}
export default Home;