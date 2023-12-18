import { Component } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  usersList:any;

  constructor(private ds:DataService){

  }

  ngOnInit():void{
    this.usersList = this.ds.getUsersList();
    
  }

  delUser(index: any){
    this.ds.delUser(index)
  }
}
