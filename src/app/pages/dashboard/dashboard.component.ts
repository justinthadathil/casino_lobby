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
    this.getAllCategories();
  }

  getAllCategories(){
    this.casioServiceService.getAllData().subscribe({
      next: (data)=>{
        this.categories = data.casino.categories;
      },
      error:(error) => {console.log(error)},
      complete:()=>{
        this.getGamesList(this.categories[0]);
      }
    })
  }

  getGamesList(data){
    this.showLoader = true;
    let games = data.games
    this.currentTab = data.name;
    let store = [];
    this.casioServiceService.getAllData().subscribe({
      next:(data)=>{
        let storeData = data.casino.games;
        games.map((elm) => {
          Object.entries(storeData).forEach(([key, val]) => {
            if(elm.gameId === key){
              store.push(val)
            }
          });
        });
      },
      error:(error) => {console.log(error)},
      complete:()=>{
        this.gameList = store;
        this.showLoader = false;
      }
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
