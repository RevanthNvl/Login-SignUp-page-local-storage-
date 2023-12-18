// header.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private headerVisibilitySubject = new BehaviorSubject<boolean>(true);
  headerVisibility$ = this.headerVisibilitySubject.asObservable();

  setHeaderVisibility(isVisible: boolean): void {
    this.headerVisibilitySubject.next(isVisible);
  }
}
