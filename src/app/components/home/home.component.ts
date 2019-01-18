import { Component, OnInit, ViewChild } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import { RequestService } from '../../services/request.service';

import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  private title:string;
  private listArr:any[] = [];
  private msg:string = "我是父组件传给子组件的数据";

  constructor(private storage: StorageService, private request:RequestService) { }



  @ViewChild('mydiv') mydiv: any;
  @ViewChild('childHeader') childHeader: any;
  ngOnInit() {
    //组件初始化
    this.title = '12345';
    this.listArr = this.storage.get('list');
    console.log('ngInit----------------', this.mydiv);
  }

  ngAfterViewInit(){
    // dom结构初始化
    console.log('ngAfterViewInit----------------', this.mydiv.nativeElement);
    console.log(this.childHeader);
  }

  add() {
    if(this.listArr.indexOf(this.title) === -1) {
      this.listArr.push(this.title);
      this.storage.set('list', this.listArr);
    }
  }

  remove(index) {
    this.listArr.splice(index, 1);
    this.storage.set('list', this.listArr);
  }

  parentChange() {
    this.childHeader.childChange();
  }

  run(e){
    console.log(e);   //子组件给父组件广播的数据
    alert('我是父组件的run方法');
  }

  getRxjsData() {
    //rxjs方法获取数据
    this.request.getRxjsData().subscribe(data => {
      console.log(data);
    })
  }

  getPromiseData() {
    //promise方法获取数据
    this.request.getPromiseData()
    .then((res) =>{
      console.log(res);
    }, (err) => {
      console.log(err);
    });
    
  }

  UnRxjsDate() {
  //取消订阅
  // console.log(this.request.getRxjsData());
  let d = this.request.getRxjsData().subscribe(data => {
    console.log(data);
  });
  d.unsubscribe();
  }

  AgainRxjsData() {
    // 多次执行
    this.request.getAgainRxjsData().subscribe(data => {
      console.log(data);
    })
  }

  getRxjsToolData() {
    //使用rxjs工具函数
    this.request.getAgainRxjsData().pipe(
      filter((value) => {
        if (value % 2 === 0) {
          return true;
        }
      }),
      map(value => {
        return value + '--map';
      })
    ).subscribe(data => {
      console.log(data);
    })
  }
}
