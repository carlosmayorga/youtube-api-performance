import { Component, OnInit, Input } from '@angular/core';
import { BootstrapModalService } from 'src/app/services/functional/bootstrap-modal.service';
import { Item } from 'src/app/interfaces/yb-playlistItems';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() videoItem: Item;
  dataForReactiveModal = {};

  constructor(private bootstrapModalService: BootstrapModalService) { }

  ngOnInit(): void {
  }

  playVideo(videoId: string, videoTitle: string) {
    this.dataForReactiveModal = { videoId, videoTitle };
    this.bootstrapModalService.modalEmitter.emit(this.dataForReactiveModal);
  }
}
