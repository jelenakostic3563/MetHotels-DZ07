import { FilterPipe } from './filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MethotelComponent } from './methotel/methotel.component';
import { NovesobeComponent } from './novesobe/novesobe.component';


@NgModule({
  declarations: [
    AppComponent,
    MethotelComponent,
    FilterPipe,
    NovesobeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
