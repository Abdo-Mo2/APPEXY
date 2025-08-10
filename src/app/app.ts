import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly title = signal('Assignment-2');
  readonly isMobileMenuOpen = signal(false);

  constructor(
    private titleService: Title,
    private router: Router,
    public theme: ThemeService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/home') {
          this.titleService.setTitle('Home');
        } else if (event.urlAfterRedirects === '/about') {
          this.titleService.setTitle('About');
        } else if (event.urlAfterRedirects === '/contact') {
          this.titleService.setTitle('Contact');
        }
        else {
          this.titleService.setTitle('Home')
        }
      }
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
  }

  toggleDarkMode(): void {
    this.theme.toggle();
  }
}