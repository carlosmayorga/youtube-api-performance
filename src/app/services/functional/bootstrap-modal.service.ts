import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BootstrapModalService {

  modalEmitter = new EventEmitter();

  constructor() {}

}
