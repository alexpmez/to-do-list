import { Injectable } from '@angular/core';

@Injectable()
export class InfoServices {
  infoServicesArr: any = [];

  getInfoServices = () => this.infoServicesArr = infoServices.slice(0);
}

const infoServices = [
  {
    'headerInfo': {
      'icons': ['home', 'settings', 'support_agent'],
      'logo': 'logo url'
    },
    'sections': ['/home', '/contact', '/settings']
  }
];