import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Batman', 'Superman', 'Wonder Woman', 'Flash'];
  public deletedHero?:string;


  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();

  };



}
