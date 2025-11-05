export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  favorites: number[]; // Array of movie IDs
  watchlist: number[]; // Array of movie IDs
}