import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  isScrolled = false;

  constructor(@Inject(DOCUMENT) private document: Document, public router: Router) { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 200;
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  // onWindowScroll(): void {
  //   const scrollTop = window.pageYOffset ||
  //     this.document.documentElement.scrollTop ||
  //     this.document.body.scrollTop || 0;
  //   this.isScrolled = scrollTop > 200;
  // }

  loginPage() {
    window.open('https://faconnect.kotak.bank.in/', '_blank', 'noopener,noreferrer');
  }
}