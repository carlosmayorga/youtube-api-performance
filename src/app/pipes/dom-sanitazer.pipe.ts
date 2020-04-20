import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domSanitizerPipe'
})
export class DomSanitizerPipe implements PipeTransform {

  constructor(private domSanitazer: DomSanitizer) {}

  transform(videoUrl): any {

    return this.domSanitazer.bypassSecurityTrustResourceUrl(videoUrl);
  }

}
