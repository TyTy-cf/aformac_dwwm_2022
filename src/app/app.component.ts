import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nomprojet';

  constructor() {
    this.exo1();
  }

  exo1(): void {
    console.log('Exo 1');
  }

}
