import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learing-module',
  templateUrl: './learing-module.component.html',
  styleUrls: ['./learing-module.component.css']
})
export class LearingModuleComponent implements OnInit {

  Name: string;

  public old = 20;

  gender: DynamicsCompressorNode;

  public userName = "Phạm Phúc Lợi";

  showBtn:boolean;

  text: string[];

  public reset(): void{

    this.showBtn = true;

    console.log(!this.showBtn);
    
    !this.showBtn;
  }
  
  ngOnInit(): void {
    this.Name = "Phạm Phúc Lợi handsome";

    this.text = [
      'Text 1', 'Text 2'
    ]

    this.showBtn = true;

  }

}
