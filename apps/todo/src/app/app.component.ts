import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [':host { display: block; height: 100vh; width: 100vw }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
