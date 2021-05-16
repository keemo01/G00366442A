import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private httpClient:HttpClient) { }

  GetAnimeData():Observable<any>{
   return this.httpClient.get('https://ghibliapi.herokuapp.com/films');//This api key will give you information on a list of studio ghibli movies
  }
}
