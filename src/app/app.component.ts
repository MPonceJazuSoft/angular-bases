import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CounterComponent} from "./counter/components/counter/counter.component";
import {HeroComponent} from "./heroes/components/heroes/hero/hero.component";
import {ListComponent} from "./heroes/components/heroes/list/list.component";
import {MainPageComponent} from "./dbz/pages/main-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, HeroComponent, ListComponent, MainPageComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  };

  resetCounter(value:number):void{
    this.counter = value;
  };

}
