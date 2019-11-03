import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryFormComponent } from './components/entry-form/entry-form.component';
import { PersonListComponent } from './components/person-list/person-list.component';

const routes: Routes = [
  { path: 'list', component: PersonListComponent },
  { path: '', component: EntryFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
