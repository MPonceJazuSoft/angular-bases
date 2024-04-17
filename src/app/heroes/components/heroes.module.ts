import {NgModule} from "@angular/core";
import {HeroComponent} from "./heroes/hero/hero.component";
import {ListComponent} from "./heroes/list/list.component";

@NgModule({
  imports: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ]
})
export class CounterModule{}
