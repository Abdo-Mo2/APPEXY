import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  private autoplayIntervalId: any = null;

  constructor(public theme: ThemeService) {}

  readonly carouselImages: string[] = [
    '/img/Home/imgi_2_fabian-irsara-67l-QujB14w-unsplash.jpg',
    '/img/Home/imgi_3_testtwo.jpg',
    '/img/Home/imgi_4_christopher-gower-m_HRfLhgABo-unsplash.jpg',
    '/img/Home/imgi_5_bg2.jpg',
    '/img/Home/imgi_9_ales-nesetril-Im7lZjxeLhg-unsplash-EFNYJM67.jpg'
  ];

  currentIndex = 0;

  get currentImage(): string {
    return this.carouselImages[this.currentIndex] ?? '';
  }

  goPrev(): void {
    const lastIndex = this.carouselImages.length - 1;
    this.currentIndex = this.currentIndex === 0 ? lastIndex : this.currentIndex - 1;
  }

  goNext(): void {
    const lastIndex = this.carouselImages.length - 1;
    this.currentIndex = this.currentIndex === lastIndex ? 0 : this.currentIndex + 1;
  }

  ngOnInit(): void {
    this.autoplayIntervalId = setInterval(() => this.goNext(), 4000);
  }

  ngOnDestroy(): void {
    if (this.autoplayIntervalId) {
      clearInterval(this.autoplayIntervalId);
    }
  }

  readonly toolsCards = [
    { title: 'Prodacts', iconClass: 'fa-solid fa-wrench', description: 'Lorem ipsum dolor sit amet elit sed.' },
    { title: 'Prodacts', iconClass: 'fa-solid fa-code', description: 'Lorem ipsum dolor sit amet elit sed.' },
    { title: 'Prodacts', iconClass: 'fa-solid fa-paintbrush', description: 'Lorem ipsum dolor sit amet elit sed.' },
    { title: 'Prodacts', iconClass: 'fa-solid fa-mobile-screen-button', description: 'Lorem ipsum dolor sit amet elit sed.' },
    { title: 'Prodacts', iconClass: 'fa-solid fa-cloud', description: 'Lorem ipsum dolor sit amet elit sed.' },
    { title: 'Prodacts', iconClass: 'fa-solid fa-shield', description: 'Lorem ipsum dolor sit amet elit sed.' },
  ];
}
