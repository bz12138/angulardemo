import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() msg: string; //接受父组件传来的数据

  @Output() private outer = new EventEmitter(); //去触发父组件方法

  private aa: string = "我是自己的数据";
  
  constructor() { }

  ngOnInit() {
  }

  childChange() {
    console.log(this.msg + '------' + this.aa);
  }

  sendParent() {
    console.log("子组件的sendParent方法");
    this.outer.emit("子组件传出的数据");
  }
}
