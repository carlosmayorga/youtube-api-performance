import { Component, OnInit } from '@angular/core';
import { BootstrapModalService } from 'src/app/services/functional/bootstrap-modal.service';
import { environment } from 'src/environments/environment';
// jQuery
declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  private ENVS = environment;
  videoUrl = '';
  videoTitle = '';

  constructor(private bootstrapModalService: BootstrapModalService) { }

  ngOnInit(): void {
    this.bootstrapModalService.modalEmitter.subscribe( resp => {
      this.videoUrl = `${this.ENVS.yb_embed_video}${resp.videoId}`;
      this.videoTitle = resp.videoTitle;
      this.openModalWithjQuery();
    });
  }

  private openModalWithjQuery() {
    $(document).ready( () => {
      $('#modalVideo').modal({
        backdrop: 'static',
        keyboard: false,
        show: true
      });
    });
  }

  closeModal() {
    this.videoTitle = '';
    this.videoUrl = '';
    $('#modalVideo').modal('hide');
  }
}
