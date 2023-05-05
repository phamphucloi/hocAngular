import { Component, OnInit } from "@angular/core";
import { Category } from "./Models/category.models";


@Component({
    selector: 'app-root',
    templateUrl: './demo5.component.html'
})

export class Demo5Component implements OnInit {

    categories: Category[];

    name: string;

    category: Category;

    getValue(e : any){
        var id = parseInt(e.target.value);
        
        for(var i = 0; i < this.categories.length; i++){
            if(id==this.categories[i].id){
                this.name = this.categories[i].name;

                this.category = this.categories[i];

            }
        }
    }

    ngOnInit(): void {
        this.categories = [
            {id: 1, name: 'Cá'},
            {id: 2, name: 'Thịt'},
            {id: 3, name: 'Sữa'},
        ]

        this.name = '';

        this.category = this.categories[0];
    }
}