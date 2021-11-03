import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:any={};

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get("https://www.datos.gov.co/resource/3msn-85r9.json")
    .subscribe(
      result => {
        this.items = result;
      },
      error => {
        console.log('problemas');
      }
    );
  }
}
