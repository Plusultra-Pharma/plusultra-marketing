import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {

  constructor(private inAppBrowser: InAppBrowser) { }
  openWebpage(url: string){
        this.inAppBrowser.create(url, '_self')
  }

  ngOnInit() {
  }

}
