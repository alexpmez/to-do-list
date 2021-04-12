import { Injectable } from '@angular/core';

@Injectable()
export class InfoServices {
  headerSecArr: any = [];

  getHeaderArr = () => this.headerSecArr = headerArr.slice(0);
}

const headerArr = [['home', 'settings', 'support_agent'], 'logo url'];