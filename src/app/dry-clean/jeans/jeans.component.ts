import { Component } from '@angular/core';

@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.css']
})
export class JeansComponent {
  piece! : number;
  setPrice(){
    this.piece = this.piece;
  }
}
