import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Highscore} from "../../models/Highscore";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  public getGames(): Observable<Highscore[]> {
    return this.http.get('http://127.0.0.1:8000/api/games').pipe(
      map((response: any) => {
        return response.data;
      }));
  }
}
