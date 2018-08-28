import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyNavComponent } from "./my-nav/my-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatSelectModule
} from "@angular/material";
import { MyDashboardComponent } from "./my-dashboard/my-dashboard.component";
import { HttpModule } from "@angular/http";
import { DogsService } from "./my-dashboard/dogs.service";
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: "first-page", component: MyDashboardComponent }
];

@NgModule({
  declarations: [AppComponent, MyNavComponent, MyDashboardComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
