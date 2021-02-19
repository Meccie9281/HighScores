import {Injectable} from '@angular/core';
import {Player} from '../../models/Player';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {
  constructor(private http: HttpClient) {}

  public getPlayers(): Observable<Player[]> {
    return this.http.get('http://127.0.0.1:8000/api/players').pipe(
      map((response: any) => {
        //return response.data.filter((player: any) =>{
          //return player.points < 100;
        //});
        return response.data;
      }),
    );
  }

  public deletePlayer(playerId: number): Observable<Player>{
    return this.http.delete('http://127.0.0.1:8000/api/players/delete/' + playerId).pipe(
      map((response: any) => {
        console.log(response);
        return response;
      })
    );
  }

  public addPlayer(playerName: string): Observable<Player>{
    return this.http.post('http://127.0.0.1:8000/api/players?name=' + playerName, { title: 'POST REQUEST' }).pipe(
      map((response: any) => {
        console.log(response);
        return response;
      }));
  }

  public updatePlayer(player: Player): Observable<Player>{
    console.log(player);
    return this.http.post('http://127.0.0.1:8000/api/players/update/' + player.id, { id: player.id, player_name: player.player_name}).pipe(
      map((response: any) => {
      return response;
    }));
  }
}
