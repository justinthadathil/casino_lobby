import { Routes } from "@angular/router";

import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { gamesComponent } from "../pages/games/games.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "games",
    component: gamesComponent
  }
];
