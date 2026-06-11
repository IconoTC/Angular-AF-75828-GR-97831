import { Injectable, Service } from '@angular/core';

// En versiones previas a la 22

@Injectable()
export class TimeOld {
  #time = new Date();

  getTime() {
    return this.#time;
  }
}

@Service()
export class Time {
  #time = new Date();

  getTime() {
    return this.#time;
  }
}
