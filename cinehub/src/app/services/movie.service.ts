import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.example.com/movies'; // URL dell'API per recuperare i film

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  searchMovies(query: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}?search=${query}`);
  }

  addToFavorites(movie: Movie): void {
    // Logica per aggiungere un film ai preferiti
  }

  removeFromFavorites(movieId: number): void {
    // Logica per rimuovere un film dai preferiti
  }

  addToWatchlist(movie: Movie): void {
    // Logica per aggiungere un film alla watchlist
  }

  removeFromWatchlist(movieId: number): void {
    // Logica per rimuovere un film dalla watchlist
  }
}