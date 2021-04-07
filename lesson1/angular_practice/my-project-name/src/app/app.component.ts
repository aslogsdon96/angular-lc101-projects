import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my super cool webpage';
  name: string = 'Allison Logsdon-Hull';
  itemList: string[] = ['cookies', 'brownies', 'pies', 'cupcakes'];
  rectangle = {
    length: 5,
    width: 6,
    area: function() {
      return this.length * this.width;
    }
  }
}
