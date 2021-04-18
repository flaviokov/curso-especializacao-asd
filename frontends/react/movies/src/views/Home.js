import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import { MoviesList } from "../components/MoviesList";
import { HomeContainer } from "../styles/HomeContainer";

export const Home = () => {


    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
    const { data } = await MoviesService.getMovies();
    setMovies(data.results);
    }

    useEffect(() => {
    fetchMovies();
    }, []);

    return (
        <HomeContainer>
            <MoviesList movies={movies} />
        </HomeContainer>
    );
}