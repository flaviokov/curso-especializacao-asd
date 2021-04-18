import { Link } from "react-router-dom";

export const MoviesItem = ({movie}) => (

    <tr>
        <td>
            <Link to={`movie/${movie.id}`}> {movie.title} </Link>
        </td>
    </tr>
);