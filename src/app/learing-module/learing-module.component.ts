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
  
  ngOnInit(): void {
    this.Name = "Phạm Phúc Lợi handsome";
  }

}
