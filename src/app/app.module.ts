import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ShowComponent } from './show/show.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';
import { ShortenPipe } from './shorten.pipe';
import { ShowBookComponent } from './show-book/show-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BookReactiveComponent } from './book-reactive/book-reactive.component';
import { CovidClientComponent } from './covid-client/covid-client.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowStudentComponent } from './show-student/show-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { OrderBy } from './orderby';
import { AddStudentComponent } from './add-student/add-student.component';
import { ChangeTextDirective } from './change-text.directive';
import { AnimateComponent } from './animate/animate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayUserComponent } from './display-user/display-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ShowComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AddBookComponent,
    ShortenPipe,
    ShowBookComponent,
    UpdateBookComponent,
    ErrorPageComponent,
    BookReactiveComponent,
    CovidClientComponent,
    ShowStudentComponent,
    StudentListComponent,
    OrderBy,
    AddStudentComponent,
    ChangeTextDirective,
    AnimateComponent,
    DisplayUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
