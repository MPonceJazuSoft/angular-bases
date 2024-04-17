import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'batman';
  public age:number = 35;

  get capitalizedName():string{
    return this.name.toUpperCase();
  };

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  };

  changeHero():void{
    this.name = 'Superman';
  };

  changeAge ():void{
    this.age = 30;
  };

  resetForm():void{
    this.name = 'batman';
    this.age = 35;
  }

}
