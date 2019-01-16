import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { StoreService } from 'src/app/services/store/store.service';

@Injectable({
  providedIn: 'root'
})
export class KeypressService {
  private keyDown$: Observable<Event>;
  private keyUp$: Observable<Event>;

  constructor() { 
    this.keyDown$ = fromEvent(document, "keydown");
    this.keyDown$.subscribe((e) => {
      console.log(e.key);
    });

    this.keyUp$ = fromEvent(document, "keyup");
    this.keyUp$.subscribe((e) => {
      console.log(e.key);
    });
  }


}
