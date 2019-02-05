import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.productForm=this.fb.group(
      {
        id:[0,[]],
        name:['',[]],
        price:[0.0,[]],
        description:['',[]]
     })
  }

}
