import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-airline',
  templateUrl: './view-airline.component.html',
  styleUrls: ['./view-airline.component.css']
})
export class ViewAirlineComponent implements OnInit {

  constructor(private api:ApiService) {
    this.fetchData()
   }
  fetchData=()=>{
    this.api.airline().subscribe(
      (data)=>this.airliData=data
    )
  }

  airliData:any=[]
  ngOnInit(): void {
  }

}
