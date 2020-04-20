import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { PlayListItems } from '../interfaces/yb-playlistItems';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private ENVS = environment;
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };


  constructor(public http: HttpClient) { }

  getListOfVideos() {
    const url = `${this.ENVS.google_api_url}${this.ENVS.yb_playlist_item_url}`;

    let params = new HttpParams();
    params = params.append('part', this.ENVS.yb_playlist_part);
    params = params.append('maxResults', this.ENVS.yb_playlist_maxResults);
    params = params.append('playlistId', this.ENVS.yb_playlist_Id);
    params = params.append('key', this.ENVS.yb_api_token_key);
    const qurl = url + '?' + params.toString();

    return this.http.get(qurl, this.httpHeaders)
      .pipe(
        map((resp: PlayListItems) => {
          console.log(resp);

          return resp.items;
        })
      );
  }
}
