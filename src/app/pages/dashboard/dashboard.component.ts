import { Component, OnInit } from "@angular/core";
import { CasioServiceService } from "src/app/admin-layout/casio-service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {

  categories;
  gameList;
  currentTab: string;
  showLoader:boolean = true;

  constructor(
    public casioServiceService : CasioServiceService
  ) {}

  ngOnInit() {
    this.casioServiceService.getCategories().subscribe((data) => {
      this.categories = data;
      this.getGamesList(data[0]);
    });
  }

  getGamesList(data){
    this.showLoader = true;
    let games = data.games
    this.currentTab = data.name;
    this.casioServiceService.getGames().subscribe((data: any) => {
      let store = []
      games.map((elm, i) => {
        Object.entries(data).forEach(([key, val]) => {
          if(elm.gameId === key){
            store.push(val)
          }
        });

        if(games.length === i+1){
          this.gameList = store;
          this.showLoader = false;
        }
      });
    });
  }

  getWidth(){
    let width = window.innerWidth;
    if(width > 414){
      return true
    }else{
      return false
    }
  }

}
