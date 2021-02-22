import {Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Player} from "../models/Player";
import {PlayerServiceService} from "../service/Player/player-service.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {Highscore} from "../models/Highscore";

@Component({
  selector: 'app-player-update-view',
  templateUrl: './player-update-view.component.html',
  styleUrls: ['./player-update-view.component.css']
})
export class PlayerUpdateViewComponent {

  showForm: boolean = false;

  playerForm = new FormGroup({
    id: new FormControl(this.data.id),
    player_name: new FormControl(this.data.player_name, Validators.required)
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Player,
              private playerService: PlayerServiceService) { }

  onSubmit(){
    this.playerService.updatePlayer(this.playerForm.value).subscribe(res => {
      console.log(res);
    });
  }

  showAddingForm(): boolean{
    this.showForm = !this.showForm;
    console.log(this.showForm);
    return this.showForm;
  }

  updatePlayer(_score: Highscore){
    this.playerForm.patchValue({
      player_name: _score.player_name
    })
  }
}
