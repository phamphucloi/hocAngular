import { Component, OnInit } from '@angular/core';
import { City } from '../Models/cities.models';
import { ParsedProperty } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css'],
})
export class ComboboxComponent implements OnInit {

  district: string[];

  changeValue(e : any){
    var id = e.target.value;

    if(!id){
      return;
    }

    // console.log(id);

    //Cách dùng filter
    console.log(this.cities.filter(data=>data.id.toString().match(id))[0].district);

    //cách dùng find
    this.district = this.cities.find(data=>data.id.toString().match(id)).district;



    // for(let i = 0; i < this.cities.length; i++){
    //   if(this.cities[i].name.includes(name)){
    //     this.district.fil this.cities[i].district;
    //   }
    // }

    
  }

  public cities: City[] = [
    {
      id: 0,
      name: 'Choose your city',
      district: ['Choose your district of city']
    },
    {
      id: 1,
      name: 'Bà Rịa Vũng Tàu',
      district: ['Long Điền',"Bà Rịa","Đất Đỏ","Long Phượng", "Long Đất", "Long Sơn","Long Hiệp"],
    },
    {
      id: 2,
      name: 'Thành phố Hồ Chí Minh',
      district: ['Quận 1','Quận 2', 'Quận 3', 'Quận 4','Quận 5','Quận 6','Quận 7','Quận 8','Quận 9','Quận 10'],
    },
    {
      id: 3,
      name: 'Hà Nội',
      district: ['Ba Đình','Thanh Xuân', 'Cầu Giấy', 'Đống Đa','2 Bà Trưng', 'Hoàn Kiếm','Hà Đông','Tây Hồ'],
    }
  ];

  ngOnInit(): void {
    this.district = this.cities[0].district;
  }
}
