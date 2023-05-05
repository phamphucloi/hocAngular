import { Component, OnInit } from "@angular/core";
import { Product } from "./Models/product.model";
import { Category } from "./Models/category.models";


@Component({
  selector: 'app-root',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  public width = 100;

  public height = 100;

  public path = './assets/images/anh.png';

  public text = '';

   public category: Category[] = [{
    id: 1,
    name: 'Cá'
  },
  {
    id: 2,
    name: 'Thịt'
  },
  {
    id: 3,
    name: 'Sữa'
  }
];

  background: string;

products: Product[];

product: Product[];

public cate: Category = this.category[0];

  search(e : any){

    var search = e.target.value.toLowerCase();

    this.product = [];

    for(var i = 0; i < this.products.length;i++){
        if(this.products[i].name.toLowerCase().includes(search)){
            this.product.push(this.products[i]);
        }
    }

  }

  changeValue(e : any){
    
    var id = parseInt(e.target.value);

    for(let i = 0; i < this.category.length; i++){
        if(this.category[i].id==id){
            this.cate = this.category[i];  
        }
    }
    
  }

  changeBackground(e: any) {
    this.background = e.target.value;
  }

  ClickMe(e: any) {
    alert(123);
  }

  resize(e: any) {
    // this.width = e.target.value.split('x')[0];

    // this.height = e.target.value.split('x')[1];
    var val = e.target.value.split('x');

    this.width = val[0];

    this.height = val[1];
  }

  changePath(e: any) {
    this.path = e.target.src;
  }

  getText(e: any): void {
    this.text = e.target.value;
  }

  ngOnInit(): void {
      
      this.products = [
          {
              id: 1,
              name: 'abc',
              price: 213,
              quantity: 2,
              photo: './assets/images/mia.png',
            },
            {
                id: 2,
                name: 'xyz',
                price: 456,
                quantity: 7,
                photo: './assets/images/anh.png',
            },
            {
                id: 3,
                name: 'nmp',
                price: 4,
                quantity: 12,
                photo: './assets/images/kimna.png',
            }
        ];

        this.product = this.products;
        
    this.background = '#000';
  }
}