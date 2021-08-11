import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';

@NgModule({ //Modules are a collection of 1+ components and more
  declarations: [ //all component decalrations go here
    AppComponent,ChildComponent
  ],
  imports: [ //import user defined and predefined Modules
    BrowserModule //this module is used to display content on web page
  ],
  providers: [], //used to provide Angular service class details
  bootstrap: [AppComponent] //provide parent component to load as when application start
})
export class AppModule { }
