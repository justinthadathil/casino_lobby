import { Component, OnInit } from "@angular/core";
import { CasioServiceService } from "src/app/admin-layout/casio-service.service";

@Component({
  selector: "app-icons",
  templateUrl: "games.component.html"
})
export class gamesComponent implements OnInit {

  allGamesList = [];
  showLoader:boolean = true;

  constructor(
    public casioServiceService: CasioServiceService
  ) {}

  ngOnInit() {
    this.getAllGames();
  }

  getAllGames(){
    let allGames = []
    this.casioServiceService.getAllData().subscribe({
      next: (data)=>{
        let trimData = data.casino.games;
        Object.entries(trimData).forEach(([key, val]) => {
          allGames.push(val)
        });
      },
      error:(error) => {console.log(error)},
      complete:()=>{
        this.allGamesList = allGames;
        this.showLoader = false;
      }
    })
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
