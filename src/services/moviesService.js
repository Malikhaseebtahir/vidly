import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoints = apiUrl + '/movies';

function movieUrl(id) {
    return `${apiEndpoints}/${id}`;
}

export function getMovies() {
    return http.get(apiEndpoints);
}
  
export function getMovie(id) {
    return http.get(movieUrl(id));
}
  
export function saveMovie(movie) {
    if (movie._id) {
        const body = {...movie}
        delete body._id;
        return http.put(movieUrl(movie._id), body);
    }
    
    return http.post(apiEndpoints, movie);
}

export function deleteMovie(id) {
    return http.delete(movieUrl(id));
}
  