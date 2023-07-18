import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeLayoutComponent } from './layout/anime-layout/anime-layout.component';
import { InfoAnimePageComponent } from './pages/info-anime-page/info-anime-page.component';
import { ListAnimePageComponent } from './pages/list-anime-page/list-anime-page.component';
import { SearchAnimePageComponent } from './pages/search-anime-page/search-anime-page.component';




const routes: Routes = [

  {
    path: '',
    component: AnimeLayoutComponent,
    children:[
      {path: 'list-anime', component: ListAnimePageComponent},
      {path: 'search-anime', component: SearchAnimePageComponent},
      {path: ':id', component: InfoAnimePageComponent},
      {path: '**', redirectTo: 'list-anime'}
    ]
  }

]




@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],

})
export class AnimeRoutingModule { }
