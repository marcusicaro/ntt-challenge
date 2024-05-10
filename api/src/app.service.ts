import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Movie } from './interfaces/movie';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getMovies(movie: string): Observable<AxiosResponse<Movie[]>> {
    return this.httpService.get(
      `https://omdbapi.com/?t=${movie}&apikey=b685d5ae`,
    );
  }
}
