import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IData } from './interfaces/data.interface';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  itemsData:IData[]=[]; //todo el json
  items:IData[]=[]; //pageSize

  page = 1;
  pageSize = 20;
  collectionSize = 0;


  constructor(private dataService:DataService){}

  ngOnInit(){
    this.dataService.loadData()
    .subscribe(
      (datos) => {
        this.itemsData = datos as IData[];
        this.collectionSize=(datos as IData[]).length; //obtener tamaño
        this.refreshData();
      },
      err => console.log(err)
    );

  }
  refreshData() {
    this.items = this.itemsData
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
