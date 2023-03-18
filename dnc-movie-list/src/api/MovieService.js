import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY = "7a18924dd5c56222d2d43a404664b13b"

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MovieService {
    
    static getMovies() {
        return axios(withBaseUrl("movie/popular"))
    }

    static getMovieDetails(id) {
        return axios(withBaseUrl(`movie/${id}`))
    }

    static searchMovies(movie) {
        return axios(withBaseUrl("search/movie") + `&query=${movie}`)
    }
}