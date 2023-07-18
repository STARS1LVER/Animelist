import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { Anime, Datum } from '../../interfaces/anime.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-anime-page',
  templateUrl: './list-anime-page.component.html',
  styleUrls: ['./list-anime-page.component.css']
})
export class ListAnimePageComponent  implements OnInit{


  public animes!:Datum[];

  constructor(
    private animeService: AnimeService
  ){}

  ngOnInit(): void {
    this.getAnimesByList()
    
  }


  public getAnimesByList():void {
    this.animeService.getAnimeBylist()
    .subscribe( animes => {
      this.animes = animes.data
    })

  }

}
