import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Item } from 'src/app/interfaces/yb-playlistItems';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listItems: Item[];

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youtubeService.getListOfVideos()
    .subscribe( (resp: Item[]) => {

      this.listItems = resp;

      return this.listItems;
    });
  }

}
