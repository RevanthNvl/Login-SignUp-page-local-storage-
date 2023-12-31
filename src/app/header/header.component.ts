// header.component.ts
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isHeaderVisible = true;

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.headerVisibility$.subscribe((isVisible) => {
      this.isHeaderVisible = isVisible;
    });
  }

  onLoginClick(): void {
    this.headerService.setHeaderVisibility(false);
  }

  onRegisterClick(): void {
    this.headerService.setHeaderVisibility(false);
  }
}
