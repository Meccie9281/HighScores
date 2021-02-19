import {Component, Input, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {Highscore} from "../models/Highscore";
import {Player} from "../models/Player";
import {ScoresService} from "../service/Scores/scores.service";
import {MatDialog} from "@angular/material/dialog";
import {UpdateHighsocreComponent} from "../update-highsocre/update-highsocre.component";

@Component({
  selector: 'app-highscores-table',
  templateUrl: './highscores-table.component.html',
  styleUrls: ['./highscores-table.component.css']
})
export class HighscoresTableComponent implements OnInit {

  public tableCols: string[] = ['Player', 'Game', 'score'];
  public highScores$: Observable<Highscore[]> = EMPTY;
  @Input() playerId: number = 0;

  constructor(
    private highscoreService: ScoresService,
    public dialog: MatDialog
  ) {}


  ngOnInit(): void {
    this.getHighScoredById(this.playerId);
  }

  getHighScoredById(player_Id: number): void {
    this.highScores$ = this.highscoreService.getScoreById(player_Id);
  }

  openEditHighscoreForm(_player: Player){
    this.dialog.open(UpdateHighsocreComponent, {
      data: _player
    })
  }

}
