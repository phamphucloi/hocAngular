import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-root',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit{

    public width = 100;

    public height = 100;

    public path = './assets/images/anh.png';

    background: string;

    changeBackground(e : any){
        this.background = e.target.value;
    }

    ClickMe(e : any){
        alert(123);
    }

    resize(e : any){

        // this.width = e.target.value.split('x')[0];

        // this.height = e.target.value.split('x')[1];


        var val = e.target.value.split('x');

        this.width = val[0];

        this.height = val[1];
    }

    changePath(e : any){
        this.path = e.target.src;
    }

    ngOnInit(): void {
        this.background = '#000';
    }
    
}