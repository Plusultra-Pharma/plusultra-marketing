import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //constructor() {}
  constructor(private inAppBrowser: InAppBrowser) { }
    openWebpage(url: string){
    	url = "https://www.nobelpharma-us.com"
	this.inAppBrowser.create(url, '_self')
  }
  
}
