import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }
  async openWebpage(url: string){
	await Browser.open({url});
  }
  
  ngOnInit() {
  }

}
