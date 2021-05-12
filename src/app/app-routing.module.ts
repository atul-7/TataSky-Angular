import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {
    path:'add-book',component:AddBookComponent
  },
  {
    path:'show-all',component:ShowBookComponent
  },
  {
    path:'update-book/:id',component:UpdateBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
