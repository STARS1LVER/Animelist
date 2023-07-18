import { Component, Input, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/anime.interface';

@Component({
  selector: 'anime-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.css']
})
export class CardAnimeComponent implements OnInit {

  @Input()
  public animesReceived!: Datum





  ngOnInit(): void {
    if( !this.animesReceived ) throw new Error('anime property is required')

    console.log(this.animesReceived)
  }


}
