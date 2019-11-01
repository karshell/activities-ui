import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    EntryFormComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
