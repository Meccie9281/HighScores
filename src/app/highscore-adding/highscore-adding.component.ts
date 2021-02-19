import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EMPTY, Observable} from "rxjs";
import {Game} from "../models/Game";
import {GamesService} from "../service/Game/games.service";
import {ScoresService} from "../service/Scores/scores.service";

@Component({
  selector: 'app-highscore-adding',
  templateUrl: './highscore-adding.component.html',
  styleUrls: ['./highscore-adding.component.css']
})
export class HighscoreAddingComponent implements OnInit {

  selectedGame: number = 0;

  games$: Observable<Game[]> = EMPTY;

  @Input() playerId: number = 0

  highscoreForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(Validators.required),
    score: new FormControl()
  });

  constructor(private scoreService: ScoresService,
              private gameService: GamesService) { }

  ngOnInit(): void {
    this.getGames();
  }

  onSubmit(): void{
    this.scoreService.addScore(this.playerId, this.selectedGame, this.highscoreForm.controls['score'].value).subscribe();
  }

  getGames(): void{
    this.games$ = this.gameService.getGames();
  }

}
