import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-pass',
  templateUrl: './view-pass.component.html',
  styleUrls: ['./view-pass.component.css']
})
export class ViewPassComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.api.pass().subscribe(
      (data)=>this.passData=data
    )
  }



  passData:any={}
  ngOnInit(): void {
  }

}
