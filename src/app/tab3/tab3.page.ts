import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private inAppBrowser: InAppBrowser) { }
    openWebpage(url: string){
        //url = "https://www.nobelpharma-us.com"
        this.inAppBrowser.create(url, '_self')
  }

}
