import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewContact().subscribe(
      (data)=>{
        this.contactData=data
      }
    )
  }
  contactData:any={}

  ngOnInit(): void {
  }

}
