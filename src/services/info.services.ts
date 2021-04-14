import { Injectable } from '@angular/core';

@Injectable()
export class InfoServices {
  infoServicesArr: any = [];

  getInfoServices = () => this.infoServicesArr = infoServices.slice(0);
}

const infoServices = [
  {
    'headerArr': [['home', 'settings', 'support_agent'], 'logo url'],
    'sections': ['home', 'cards', 'contact-us', 'settings']
  }
];