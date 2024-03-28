import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { AlertService} from '../public-api'

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bc-ui-angular-libs';

  constructor(
    private alertService: AlertService
  ) {
  }

  testHandler() {
    this.alertService.info('Unauthorized: Access is denied due to invalid credentials.')
  }


  ngOnInit(): void {
    // this.testHandler()
  }

}
