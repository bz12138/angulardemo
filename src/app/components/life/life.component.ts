import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit {

  @Input() msg:string;

  constructor() { 
    console.log('00执行了构造函数---1次');
  }

  ngOnchanges() {
    console.log('01ngOnChanges');
  }
  ngOnInit() {
    console.log('02ngOnInit---1次');
  }
  ngDoCheck() {
    console.log('03ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('04ngAfterContentInit---1次');
  }
  ngAfterContentChecked() {
    console.log('05ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('06ngAfterViewInit---1次');
  }
  ngAfterViewChecked() {
    console.log('06ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('07ngOnDestroy---1次');
  }
}
