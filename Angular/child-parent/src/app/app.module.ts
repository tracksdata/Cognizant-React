import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { GreetComponent } from './greet/greet.component';
import { EmployeeComponent } from './employee/employee.component'
@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
