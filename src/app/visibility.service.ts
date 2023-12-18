// visibility.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  private headerVisibleSubject = new BehaviorSubject<boolean>(true);
  headerVisible$ = this.headerVisibleSubject.asObservable();

  setHeaderVisibility(visible: boolean) {
    this.headerVisibleSubject.next(visible);
  }
}