import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from './../crud.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Icrud } from './../interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id! : number;
  editList! : Icrud;
  editForm : FormGroup = new FormGroup({
    id : new FormControl(),
    name : new FormControl(''),
    gender : new FormControl(''),
    mobile : new FormControl(''),
    street : new FormControl(''),
    colony : new FormControl(''),
    thana : new FormControl(''),
    district : new FormControl(''),
    post : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl('')
  })

  constructor(
    public service : CrudService,
    private route : ActivatedRoute,
    private router : Router
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['crudId'];

    this.service.findData(this.id).subscribe((data : Icrud) => {
      this.editList = data;
      this.editForm.setValue(this.editList);
    })
  }

  editSubmit(){
    this.service.updateData(this.id, this.editForm.value).subscribe((res : any) => {
      this.router.navigateByUrl('crud/index');
    })
  }

}
