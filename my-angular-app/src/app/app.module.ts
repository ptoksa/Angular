import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [
    MyComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [] // No bootstrap component here
})
export class AppModule { }
