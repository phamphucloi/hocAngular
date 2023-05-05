import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-root',
    templateUrl: './demo4.component.html'
})

export class Demo4Component implements OnInit {
    
    name: string[];

    rs: string[];

    f:number;

    display(e : any): void {
        var value = e.target.value;
        console.log(value);   
    }

    display2(e : any): void {
        var value = e.target.value;
        console.log(value);
     
    }

    display3(e:any){
        var value = parseFloat(e.target.value); 

        this.f = value*1.8+32;

    }

    filter(e : any){
        var val = e.target.value.toLowerCase();

        this.rs = [];

        for(var i = 0; i < this.name.length; i++){
            if(this.name[i].toLowerCase().includes(val)){
                this.rs.push(this.name[i]);
            }
        }

    }

    ngOnInit(): void {
        this.f = 0;

        this.name = [
            'Phạm Phúc Lợi', "Phạm Như Quỳnh", "abc", "xyzz"
        ];

        this.rs = this.name;

    }

}