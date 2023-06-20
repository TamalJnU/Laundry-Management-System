import { CrudService } from './../crud.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm! : FormGroup;

  constructor(public service : CrudService, private router : Router){}

  ngOnInit(): void {
    this.createForm = new FormGroup({
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
  }

  submit(){
    this.service.createData(this.createForm.value).subscribe((res : any) => {
      //this.ngOnInit();
      this.router.navigateByUrl('crud/index');
    })
  }

}
