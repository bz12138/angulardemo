import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  private list:number[] = [1,2,3,4,5,6,7];
  constructor() { }

ngOnInit() {
  }

}
