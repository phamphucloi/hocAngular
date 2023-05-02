import {Component, OnInit} from '@angular/core';
import { Student } from './Models/student.models';
import { Color } from './Models/color.models';

@Component({
    selector: 'app-root',
    templateUrl: './demo3.component.html'
})

export class Demo3Component implements OnInit {

    id:number;

    student: Student;

    border:number;

    backgroundColor:string;

    students: Student[];

    background: Color;

    ngOnInit(): void {

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