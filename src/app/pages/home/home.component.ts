import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { response } from 'express';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private api: ApiService){}
ngOnInit(){
  this.Data()

}
data:any
Data(){
  this.api.getData().subscribe((response:any) =>{
    this.data=response;
  }
  )
}
}
