import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
declare const bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit , OnDestroy{

  @ViewChild('exampleModal') modalElement!: ElementRef;
  private modal!: Modal;
  ngAfterViewInit(): void {
    const element = document.getElementById('homeCarousel');
    if (element) {
      const instance = bootstrap.Carousel.getOrCreateInstance(element, {
        interval: 6000,
        pause: false,
        ride: 'carousel',
        touch: true,
        wrap: true
      });
      instance.cycle();
    }    
    if (sessionStorage.getItem('hideModal') !== 'true') {
    this.modal = new Modal(this.modalElement.nativeElement, {
      backdrop: 'static', // optional
      keyboard: true
    });
    this.modal.show();
    }
  }

  isScrollTopVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrollTopVisible = window.pageYOffset > 300;
  }

  scrollToTop(event: Event): void {
    event.preventDefault(); // prevents anchor jump
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  closeModal() {
    this.modal.hide();
    sessionStorage.setItem('hideModal', 'true');
  }
  ngOnDestroy(): void {
    this.closeModal();
  }
}
