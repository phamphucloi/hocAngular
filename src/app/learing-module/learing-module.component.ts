import { Component, OnInit } from '@angular/core';
import { Fruits } from '../Models/fruits.models';

@Component({
  selector: 'app-learing-module',
  templateUrl: './learing-module.component.html',
  styleUrls: ['./learing-module.component.css']
})
export class LearingModuleComponent implements OnInit {

  Name: string;

  public old = 10;

  public userName = "Phạm Phúc Lợi";

  showBtn:boolean;

  public reset(): void{
    !this.showBtn;
  }

  fruit:Fruits[];
  
  ngOnInit(): void {
    this.Name = "Phạm Phúc Lợi handsome";

    this.showBtn = true;

    this.fruit = [
      {
        giatri: "oi",
        evaluate: true,
        colour: "#cccfff",
        price: 5
      },
      {
        giatri: "cam",
        evaluate: true,
        colour: "#fffccc",
        price: 15
      },
      {
        giatri: "mit",
        evaluate: false,
        colour: "#96e367",
        price: 25
      }
    ]

  }

}
