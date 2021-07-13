import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoints = apiUrl + '/movies';

export function getMovies() {
    return http.get(apiEndpoints);
}
  
export function getMovie(id) {
    return http.get(apiEndpoints + '/' + id);
}
  
export function saveMovie(movie) {
    if (movie._id) {
        const body = {...movie}
        delete body._id;
        return http.put(apiEndpoints + '/' + movie._id, body);
    }
    
    return http.post(apiEndpoints, movie);
}

export function deleteMovie(id) {
    return http.delete(apiEndpoints + '/' + id);
    // let movieInDb = movies.find(m => m._id === id);
    // movies.splice(movies.indexOf(movieInDb), 1);
    // return movieInDb;
}
  