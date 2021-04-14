import { InfoServices } from './../../services/info.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [InfoServices]
})
export class HeaderComponent implements OnInit {
  InfoServicesArr: any = this.InfoServices.getInfoServices();
  
  constructor(private InfoServices: InfoServices) {}


  ngOnInit(): void {
  }

}
