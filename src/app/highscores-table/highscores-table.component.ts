import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
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
  @Output() updateEvent = new EventEmitter<Highscore>();

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

  editItem(_score: Highscore){
    this.dialog.open(UpdateHighsocreComponent, {
      data: _score
    })
  }

  updateItem(_score: Highscore){
    this.updateEvent.emit(_score);
  }
}
