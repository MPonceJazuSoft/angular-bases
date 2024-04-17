import {NgModule} from "@angular/core";
import {CounterComponent} from "./counter/counter.component";

@NgModule({
  imports: [
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule{}
