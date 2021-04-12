import { InfoServices } from './../../services/info.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [InfoServices]
})
export class HeaderComponent implements OnInit {
  headerArr: any = this.InfoServices.getHeaderArr();
  
  constructor(private InfoServices: InfoServices) {}

  ngOnInit(): void {
  }

}
