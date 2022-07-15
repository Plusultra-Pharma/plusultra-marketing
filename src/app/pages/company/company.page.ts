import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {

  constructor() { }
  async openWebpage(url: string){
        await Browser.open({url});
  }

  ngOnInit() {
  }

}
