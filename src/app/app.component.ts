import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-server-side-pagination-and-sorting';
  maxSize = 5;
  bigTotalItems = 175;
  bigCurrentPage = 1;
}
