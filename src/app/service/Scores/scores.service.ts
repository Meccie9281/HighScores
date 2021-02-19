import {Injectable} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {Highscore} from "../../models/Highscore";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor(private http: HttpClient) {
  }

  public getScores(): Observable<Highscore[]> {
    return this.http.get('http://127.0.0.1:8000/api/scores').pipe(
      map((response: any) => {
        return response.data;
      }));
  }

  public getScoreById(id: number): Observable<Highscore[]> {
    return this.http.get('http://127.0.0.1:8000/api/scores/' + id).pipe(
      map((response: any) => {
        return response.data;
      }));
  }

  public addScore(player_id: number, game_id: number, score: number): Observable<Highscore> {
    return this.http.post('http://127.0.0.1:8000/api/scores', {
      player_id: player_id,
      game_id: game_id,
      score: score
    }).pipe(map((response: any) => {
      return response.data;
    }));
  }

  public updateScore(player_id: number, score: number) {
    return this.http.post('http://127.0.0.1:8000/api/scores/update/' + player_id, {score: score}).pipe(
      map((response: any) => {
        return response.data;
      }));
  }
}

