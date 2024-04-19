import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import {MainPageComponent} from "./pages/main-page.component";


@NgModule({
  imports: [
    MainPageComponent,
    FormsModule
  ],
  exports: [
    MainPageComponent,
  ]
})
export class DbzModule{}
