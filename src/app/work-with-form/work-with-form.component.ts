import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../Services/global-variable.service';
import { Color } from '../Models/color.models';

@Component({
  selector: 'app-work-with-form',
  templateUrl: './work-with-form.component.html',
  styleUrls: ['./work-with-form.component.css']
})
export class WorkWithFormComponent implements OnInit {
  
  public name = '';

  public color: Color[]= [{
    mau1: this.name,
    mau2: 'xanh lá',
    mau3: 'xanh dương'
  },
  {
    mau1: 'vàng',
    mau2: 'xanh ngọc',
    mau3: 'tím'
  }
]

  constructor(private _service: GlobalVariableService){}

  public subMitForm(){
    console.log(this.color);
  }

  ngOnInit(): void {
    
  }

}
