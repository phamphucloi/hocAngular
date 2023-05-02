import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './demo1.component.html'
})

// class Demo1Component {

// }

export class Demo1Component implements OnInit {
    id:number;
    username:string;
    status:boolean;
    phone:any;
    border:number;
    width:number;
    backgroundColor:string;
    photo:string;
    
    ngOnInit(): void {
        this.id = 123;
        this.username = "Phạm Phúc Lợi";
        this.status = true;
        this.phone = "123456";
        this.photo = "anh.png";

        this.border = 1;
        this.width = 300;
        this.backgroundColor = "#fffccc";
    }
}