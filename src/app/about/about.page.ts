import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private inAppBrowser: InAppBrowser) { }
  openWebpage(url: string){
        this.inAppBrowser.create(url, '_self')
  }
  
  ngOnInit() {
  }

}
