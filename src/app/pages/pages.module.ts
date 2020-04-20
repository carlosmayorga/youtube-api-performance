import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ModalComponent } from '../components/modal/modal.component';
import { DomSanitizerPipe } from '../pipes/dom-sanitazer.pipe';
import { PagesRoutingModule } from './pages-routing.module';
import { VideosComponent } from '../components/videos/videos.component';
import { VideoComponent } from '../components/video/video.component';


@NgModule({
  declarations: [
    DomSanitizerPipe,
    HomeComponent,
    NavbarComponent,
    ModalComponent,
    VideoComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule
  ]
})

export class PagesModule { }
