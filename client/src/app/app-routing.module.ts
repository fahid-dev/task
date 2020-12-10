import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToDoListComponent } from './components//to-do-list/to-do-list.component';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
  { path: 'add', component: ToDoListComponent },
  { path: 'list', pathMatch: 'full', component: ListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
