import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Highscore} from "../models/Highscore";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {debounceTime, distinctUntilChanged, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css']
})
export class TableInfoComponent implements OnInit, OnDestroy{

  @Input() score: any = {};
  @Output() editEvent = new EventEmitter<Highscore>();
  @Output() UpdateEvent = new EventEmitter<Highscore>();
  public subject: Subject<void> = new Subject<void>();
  public highScoreForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
    this.highScoreForm = this.formBuilder.group({
      id: new FormControl((this.score.id)),
      player_name: new FormControl(this.score.player_name),
      game_name: new FormControl(this.score.game_name),
      score: new FormControl(this.score.score)
    })
    this.highScoreForm.disable();
    this.onFormChanges();
  }

  ngOnDestroy() {
    this.subject.next();
  }

  changeForm() {
    if(this.highScoreForm.disabled) {
      this.highScoreForm.enable()
    } else {
      this.highScoreForm.disable();
    }
  }

  onFormChanges(): void{
    this.highScoreForm.valueChanges.pipe(
      debounceTime(375),
      distinctUntilChanged(),
      takeUntil(this.subject)
    ).subscribe(val =>{
      this.UpdateEvent.emit(val);
    });
  }
}
