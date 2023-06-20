import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DrycleanService } from '../dryclean.service';

@Component({
  selector: 'app-baby-dress',
  templateUrl: './baby-dress.component.html',
  styleUrls: ['./baby-dress.component.css']
})
export class BabyDressComponent implements OnInit {
  form! : FormGroup;

  constructor(
    public service : DrycleanService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.form = new FormGroup({
      id : new FormControl(),
      name : new FormControl(''),
      piece : new FormControl(''),
      perunit : new FormControl('')
    })
  }

  submit(){
    console.log(this.form.value);
    this.service.addCart(this.form.value).subscribe((res : any) => {
      console.log('ttttttttttttttttttt');
    })
  }

}
