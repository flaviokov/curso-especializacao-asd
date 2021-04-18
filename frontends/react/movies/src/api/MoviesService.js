
import axios from 'axios';

const API_KEY = 'ee45b51652f5bbcedbba4859a13da970';
const BASE_URL = 'https://api.themoviedb.org/3/';

const api = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {

    static getMovies() {
        return axios(api('movie/popular'))
    }

    static getMovieById(id) {
        return axios(api(`movie/${id}`));
    }

}