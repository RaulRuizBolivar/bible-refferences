import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatIconModule, MatTabsModule, MatButtonModule, MatTooltipModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private static readonly MOBILE_BREAKPOINT = 900;
  private static readonly NAV_COLLAPSED_KEY = 'nav-collapsed';
  private readonly document = inject(DOCUMENT);
  private preferredNavCollapsed = false;
  protected isNavCollapsed = false;
  protected isDarkMode = false;

  constructor() {
    this.preferredNavCollapsed = localStorage.getItem(App.NAV_COLLAPSED_KEY) === 'true';
    const storedTheme = localStorage.getItem('theme-mode');
    if (storedTheme === 'dark') {
      this.isDarkMode = true;
    } else if (storedTheme === 'light') {
      this.isDarkMode = false;
    } else {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    this.applyTheme();
    this.syncNavForViewport();
  }

  protected toggleNav(): void {
    if (this.isMobileViewport()) {
      this.isNavCollapsed = false;
      return;
    }

    this.preferredNavCollapsed = !this.preferredNavCollapsed;
    localStorage.setItem(App.NAV_COLLAPSED_KEY, String(this.preferredNavCollapsed));
    this.isNavCollapsed = this.preferredNavCollapsed;
  }

  protected toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme-mode', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    this.document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  @HostListener('window:resize')
  protected onWindowResize(): void {
    this.syncNavForViewport();
  }

  private syncNavForViewport(): void {
    if (this.isMobileViewport()) {
      this.isNavCollapsed = false;
      return;
    }

    this.isNavCollapsed = this.preferredNavCollapsed;
  }

  private isMobileViewport(): boolean {
    return window.innerWidth <= App.MOBILE_BREAKPOINT;
  }
}
