import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class EventEmitterService {

  data = new EventEmitter();

  constructor() { }

  sendData(data: any) {
    this.data.emit(data);
  }
}