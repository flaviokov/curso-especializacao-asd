import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router"
import { MoviesService } from "../api/MoviesService";
import { Container } from "../styles/Container";

export const MovieDetail = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const {data} = await MoviesService.getMovieById(id);
        setMovie(data);
    }

    useEffect(() => {
        fetchMovie();
    },[]);

    return (
    
        <Fragment>
          <Container>
            <h1>{movie.title}</h1>

            <article>
                {movie.overview}
            </article>
          </Container>
        </Fragment>
    )

}