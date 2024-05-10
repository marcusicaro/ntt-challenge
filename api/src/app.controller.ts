import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';
import { Movie } from './interfaces/movie';

@Controller('movies')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':movie')
  getMovies(@Param('movie') movie: string): Observable<Movie[]> {
    if (!movie) {
      throw new HttpException('movie is required', HttpStatus.BAD_REQUEST);
    }
    return this.appService
      .getMovies(movie)
      .pipe(map((response) => response.data));
  }
}
