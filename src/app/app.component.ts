import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-one';
  post = {
    title: "Title",
    isFavorite: true
  }
  courses = [
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 2'},
    {id: 3, name: 'course 3'}
  ];
  
  viewMode = 'map';

  onAdd() {
    this.courses.push({ id: 4, name: 'course 4'})
  }
}
