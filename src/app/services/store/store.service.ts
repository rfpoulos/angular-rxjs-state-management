import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { get, set } from 'lodash/fp';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private data$: BehaviorSubject<any>;
  private data;
  constructor() {
    this.data = {};
    this.data$ = new BehaviorSubject(this.data);
  }

  get<T>(path: string[]): Observable<T> {
    return this.data$.pipe(
      map((data) => get(path, data)),
      distinctUntilChanged()
    );
  }

  set<T>(path: string[], value: T): void {
    const newData = set(path, value, this.data);
    this.data = newData;
    this.data$.next(newData);
  }
}
