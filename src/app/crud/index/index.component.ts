import { CrudService } from './../crud.service';
import { Icrud } from './../interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  indexList : Icrud[] = [];
  constructor(private service : CrudService){}

  ngOnInit(): void {
    this.service.getAllData().subscribe((old : Icrud[]) => {
      this.indexList = old;
    })
  }

  delete(id : number){
    this.service.deleteData(id).subscribe(res => {
      this.indexList = this.indexList.filter(value => value.id !== id);
    })
  }

}
