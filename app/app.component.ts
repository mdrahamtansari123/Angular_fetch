import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fatch';
  countryData:any = null;
  constructor(private api:ApiService) {}

  ngOnInit() {
       this.api.getCountries().subscribe((data)=>{
       this.countryData = data;
});
}
}
