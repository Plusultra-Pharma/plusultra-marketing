import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
//import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-literature-db',
  templateUrl: './literature-db.page.html',
  styleUrls: ['./literature-db.page.scss'],
})
export class LiteratureDbPage implements OnInit {
  constructor() { }
  async openWebpage(url: string){
        await Browser.open({url});
  }

  ngOnInit() {
  }

}
