import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Highscore} from "../models/Highscore";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css']
})
export class TableInfoComponent implements OnInit {

  @Input() score: any = {};
  @Output() editEvent = new EventEmitter<Highscore>();
  @Output() UpdateEvent = new EventEmitter<Highscore>();
  public isEditing: boolean;
  public highScoreForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
    this.highScoreForm = this.formBuilder.group({
      player_name: new FormControl(this.score.player_name),
      game_name: new FormControl(this.score.game_name),
      score: new FormControl(this.score.score)
    })
    this.isEditing = false;
    this.onFormChanges();
  }

  editItem(score: Highscore) {
    this.editEvent.emit(score);
  }

  changeForm() {
    this.isEditing = !this.isEditing;
  }

  onFormChanges(): void{
    this.highScoreForm.valueChanges.subscribe(val =>{
      this.UpdateEvent.emit(val);
    });
  }
}
