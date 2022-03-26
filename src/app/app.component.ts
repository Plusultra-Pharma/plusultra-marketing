import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Company', url: '/company', icon: 'home' },
    { title: 'Product', url: '/product', icon: 'gift' },
    { title: 'About', url: '/about', icon: 'people' },
    { title: 'Market', url: '/market', icon: 'pricetags' },
    { title: 'Impressum', url: '/impressum', icon: 'flag' },
  ];
  public labels = ['Configuration'];
  constructor() {}
}
