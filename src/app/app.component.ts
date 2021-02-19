import { Component } from '@angular/core';
import {Player} from "./models/Player";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trivia-web-client-angular';

  constructor() {}

    ngOnInit(){
    }
}
