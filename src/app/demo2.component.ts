import { Component, OnInit } from '@angular/core';
import { Product } from './Models/product.model';

@Component({
    selector: 'app-root',
    templateUrl: './demo2.component.html'
})

export class Demo2Component implements OnInit {

    product : Product;
    name : string[];
    products : Product[];
    status : boolean;
    rs : Product[];

    filter(e : any){
        var val = e.target.value.toLowerCase();     

        this.rs = [];

        for(var i = 0; i < this.products.length; i++){
            if(this.products[i].name.toLowerCase().includes(val)){
                this.rs.push(this.products[i]);
            }
        }
    }

    ngOnInit(): void {
        this.product = {
            id : 1,
            name : "abc",
            photo : "anh.png",
            price : 100,
            quantity : 2
        }

        this.name = [
            'name1','name2','name3','name4','name5','name6'
        ]

        this.products = [
            {
                id : 1,
                name : "abc",
                photo : "anh.png",
                price : 100,
                quantity : 2
            },
            {
                id : 1+1,
                name : "abca",
                photo : "anh.png",
                price : 1,
                quantity : 2
            },            {
                id : 1+2,
                name : "abcd",
                photo : "anh.png",
                price : 7,
                quantity : 2
            },            {
                id : 1+3,
                name : "abcf",
                photo : "anh.png",
                price : 5.4,
                quantity : 2
            }
        ]

        this.status = true;

        this.rs = this.products;

    }
}