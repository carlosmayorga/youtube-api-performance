import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/interfaces/yb-playlistItems';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  @Input() videoItems: Item[];
  dataForReactiveModal = {};

  constructor() { }

  ngOnInit(): void {
  }

}
