import { AfterViewInit, Component, HostListener } from '@angular/core';
declare const bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
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
}
