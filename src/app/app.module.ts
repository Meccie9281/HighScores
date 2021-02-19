import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule} from "ngx-bootstrap/alert";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayerUpdateViewComponent } from './player-update-view/player-update-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PlayersTableComponent } from './players-table/players-table.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HighscoresTableComponent } from './highscores-table/highscores-table.component';
import { HighscoreAddingComponent } from './highscore-adding/highscore-adding.component';
import { UpdateHighsocreComponent } from './update-highsocre/update-highsocre.component';

const routes: Routes = [
  { path: '**', component: NavigationComponent },
  { path: '', component: NavigationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerUpdateViewComponent,
    PlayersTableComponent,
    NavigationComponent,
    HighscoresTableComponent,
    HighscoreAddingComponent,
    UpdateHighsocreComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    AlertModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule,
  MatDialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

