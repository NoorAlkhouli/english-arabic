import { CommonModule } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentLang: string | undefined;
  title = 'angular-i18n';

  languages = [
    { lang: 'en', name: 'English' },
    { lang: 'ar', name: 'Arabic' },

    // Add more languages as needed
  ];


  constructor(private router: Router) {}

  // Method to get the current route
  getCurrentRoute(): string {
    return this.router.url.split('/')[1] || ''; // Extracts the route after the language prefix
  }

  // Method to change the language and redirect
  changeLanguage(lang: string, event: Event) {
    event.preventDefault(); // Prevent the default anchor tag behavior
    const currentRoute = this.getCurrentRoute();
    const newUrl = `/${lang}${currentRoute ? '/' + currentRoute : ''}`;
    this.router.navigateByUrl(newUrl);
  }
}

