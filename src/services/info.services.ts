import { Injectable } from '@angular/core';

@Injectable()
export class InfoServices {
  headerSecArr: any = [];

  getHeaderArr = () => this.headerSecArr = headerArr.slice(0);
}

const headerArr = [['home', 'about us', 'contact us'], 'logo url'];