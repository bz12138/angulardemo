import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsItemComponent } from './components/news-item/news-item.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {
    path: 'newsDetail/:id', component: NewsDetailComponent
  },
  {
    path: 'newsItem',
    component: NewsItemComponent
  },
  {
    //访问跟路由跳转的地址
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    //匹配不到路由时跳转的地址
    path: '**',
    redirectTo: '/news'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
