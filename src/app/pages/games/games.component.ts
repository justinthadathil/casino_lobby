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
    this.casioServiceService.getGames().subscribe((data: any) => {
      this.allGamesList = Object.keys(data).map((key) => data[key]);
      this.showLoader = false;
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
