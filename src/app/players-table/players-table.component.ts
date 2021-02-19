import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from "rxjs";
import { Player } from "../models/Player";
import { PlayerServiceService } from "../service/Player/player-service.service";
import { MatDialog } from '@angular/material/dialog';
import { PlayerUpdateViewComponent } from "../player-update-view/player-update-view.component";

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

  public players$: Observable<Player[]> = EMPTY;
  public tableCols: string[] = ['Id', 'Player'];

  constructor(private playerService: PlayerServiceService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void{
    this.players$ = this.playerService.getPlayers();
  }

  openPlayer(player: Player): void{
    this.dialog.open(PlayerUpdateViewComponent, {
      data: player
    });
  }
}
