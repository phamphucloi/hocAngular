import {Component, OnInit} from '@angular/core';
import { Student } from './Models/student.models';
import { Color } from './Models/color.models';

@Component({
    selector: 'app-root',
    templateUrl: './demo3.component.html'
})

export class Demo3Component implements OnInit {
    
    pathImage: string;

    width: string;

    height: string;

    id:number;

    student: Student;

    border:number;

    backgroundColor:string;

    students: Student[];

    background: Color;

    photo: string[];
    
    clickMe(){

        alert(123);

    }
    
    change(event: any){
        var rs = event.target.value;
    }



    resize(event: any){
        var rs = event.target.value.split('x');

        this.width = rs[0];

        this.height = rs[1];
    }

    changeImg(path: any){

        this.pathImage = path.target.src;

    }


    ngOnInit(): void {

        this.photo = [
            "assets/images/anh.png", "assets/images/mia.png","assets/images/kimna.png"
        ];

        this.pathImage = "assets/images/anh.png";

        this.width = '200';

        this.height = '200';


        this.border = 1;

        this.backgroundColor = "#cccfff";

        this.id = 123;

        this.student = {
            id: 1,
            name: "Phạm Phúc Lợi handsome",
            gender: true,
            dob: new Date(),
        };

        this.students = [
            {
                id: 1,
                name: "Phạm Phúc Lợi handsome",
                gender: true,
                dob: new Date(),
            },{
                id: 1+1,
                name: "Phạm Phúc Lợi handsome",
                gender: false,
                dob: new Date(),
            },{
                id: 1+2,
                name: "Phạm Phúc Lợi handsome",
                gender: true,
                dob: new Date(),
            }
        ];

        this.background = {
            mau1: '#cccfff',
            mau2: '#fffccc',
            mau3: '#96ae'
        }

    }
}