import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimePageComponent } from './pages/info-anime-page/info-anime-page.component';
import { ListAnimePageComponent } from './pages/list-anime-page/list-anime-page.component';
import { SearchAnimePageComponent } from './pages/search-anime-page/search-anime-page.component';
import { AnimeLayoutComponent } from './layout/anime-layout/anime-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimeRoutingModule } from './anime-routing.module';
import { CardAnimeComponent } from './components/card-anime/card-anime.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    InfoAnimePageComponent,
    ListAnimePageComponent,
    SearchAnimePageComponent,
    AnimeLayoutComponent,
    CardAnimeComponent
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    MaterialModule

  ]
})
export class AnimeModule { }
