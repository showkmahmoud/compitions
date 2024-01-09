import { Component } from '@angular/core';
import { data } from 'src/app/shared/Static Data/data';
import { LOCAL_STORAGE_KEY } from 'src/app/shared/enums/localStorageKey';
import { ITeam } from 'src/app/shared/interfaces/team';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  teams: ITeam[] = [];
  constructor(public localStorage:LocalStorageService){

  }
  ngOnInit(): void {
    this.getTeams()
  }

  getTeams(){
    if(this.localStorage.getItem(LOCAL_STORAGE_KEY.TEAMS)){
    }else{
      this.localStorage.setItem(LOCAL_STORAGE_KEY.TEAMS,data)
    }
    this.teams = this.localStorage.getItem(LOCAL_STORAGE_KEY.TEAMS);
  }
}
