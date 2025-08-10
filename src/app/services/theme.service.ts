import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal(false);

  toggle(): void {
    this.isDark.update((v) => !v);
  }
} 