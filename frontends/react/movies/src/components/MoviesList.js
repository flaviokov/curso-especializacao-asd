import { MoviesItem } from "./MoviesItem";

export const MoviesList = ({movies}) => (

    <section>
        <table>
            <th>My Movies</th>        
             {movies.map(m => <MoviesItem movie={m} />)}      
        </table>
    </section>
);