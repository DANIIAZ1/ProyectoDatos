import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  loadData(){
    return this.http.get("https://www.datos.gov.co/resource/3msn-85r9.json")
  }
}
