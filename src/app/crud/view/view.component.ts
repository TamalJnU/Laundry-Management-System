import { CrudService } from './../crud.service';
import { Icrud } from './../interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  id! : number;
  viewList! : Icrud;

  constructor(
    public service : CrudService,
    private route : ActivatedRoute,
    private router : Router
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['crudId'];

    this.service.findData(this.id).subscribe((old : Icrud) => {
      this.viewList = old;
    })
  }

}
