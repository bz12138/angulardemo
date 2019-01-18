import { Injectable } from '@angular/core';

import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  getRxjsData() {
    //rxjs方式获取数据
    return new Observable((observer) => {
      setTimeout(() => {
        var username='张三--Rxjs';
        observer.next(username);     
        // observer.error('数据')        
      }, 2000); 
    })
  }

  getPromiseData() {
    // promise方法获取数据
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var username='李四--Promise';
        if(true) {
          resolve(username);
        } else {
          reject('失败');
        }
                
      }, 1000);
    })
  }

  getAgainRxjsData() {
    let count = 0;
    return new Observable((observer) => {
      setInterval(() =>{
        count++;
        observer.next(count);
      },1000)
    })
  }
}
