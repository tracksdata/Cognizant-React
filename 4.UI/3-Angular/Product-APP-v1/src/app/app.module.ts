import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
