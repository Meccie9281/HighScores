import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Player} from "../models/Player";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Highscore} from "../models/Highscore";
import {ScoresService} from "../service/Scores/scores.service";

@Component({
  selector: 'app-update-highsocre',
  templateUrl: './update-highsocre.component.html',
  styleUrls: ['./update-highsocre.component.css']
})
export class UpdateHighsocreComponent implements OnInit {

  HighscoreForm = new FormGroup({
    score: new FormControl(this.data.score ,Validators.required)
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Highscore,
              private highscoreService: ScoresService) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  onSubmit(){
    this.highscoreService.updateScore(this.data.id, this.HighscoreForm.controls['score'].value).subscribe()
  }

}
