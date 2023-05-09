import { Injectable } from '@angular/core';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {

  mul: number;

  private a: number = 5;

  public b: number;

  constructor() { }

  ngOninit(num: number): number {
    return Math.sqrt(num);
  }

  public getA(): number{
    return this.a;
  }

  public setA(c: number): void{
    this.a = c;
    console.log("Biến a : " + this.a);
  }

  public submitForm(data: any): any{
    // (data==null || data==undefined || data.length==0 || data.isEmpty())?"Mời bạn nhập tên":data

    console.log(data);

    return data;
  }
}
