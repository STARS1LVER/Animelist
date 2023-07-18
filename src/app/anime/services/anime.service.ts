import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Datum, Anime } from '../interfaces/anime.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  // Llamamos la url:
  private baseUrl: string = environments.baseUrl

  private continueUrl: string = '?page=1&limit=24'


  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Este metodo nos devuelve una lista de animes
   * @param void no recibe parametros
   * @returns Observable<Anime>
   */
  public getAnimeBylist(): Observable <Anime> {
    return this.httpClient.get<Anime>(`${this.baseUrl}${this.continueUrl}`)
  }

  /**
   *  Este metodo nos permite buscar un anime por medio de un id
   * @param id tipo string
   * @returns retornar un Observable de tipo Anime
   *
   */
  public getAnimeById( id: string ): Observable<Anime | undefined >{
    return this.httpClient.get<Anime>(`${this.baseUrl}/id`)
    // Usamos el pipe por si en caso de error nos retorne undefined
    .pipe(
      catchError( error => of( undefined ))
    )
  }

}
