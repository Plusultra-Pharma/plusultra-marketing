import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor() { }
  // constructor(private inAppBrowser: InAppBrowser) { }
  openWebpage(url: string){
  /*
        this.inAppBrowser.create(url, '_self')
	*/	
  }

  ngOnInit() {
  }

}
