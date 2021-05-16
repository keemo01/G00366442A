import { Component, OnInit } from '@angular/core';
import {AnimeService} from '../Services/anime.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
AnimeData:any = {};
  constructor(private animeService:AnimeService) {}

ngOnInit(){
  this.animeService.GetAnimeData().subscribe(
    (data)=>{
      this.AnimeData = data;
      console.log(this.AnimeData);
    }
  );
}

}
