import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  currentLang: string | undefined;
  title = 'angular-i18n';
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private route: ActivatedRoute
  ) {}
  switchLang() {
    location.href = this.locale === 'ar' ? '/en' : '/ar';
  }

  ngOnInit(): void {
    // Assuming the language is set as a route parameter
    this.route.params.subscribe((params) => {
      this.currentLang = params['lang'] || 'en';
    });
  }

  getImagePath(imageName: string): string {
    return `../../../../Angular/angular-i18n/dist/angular-i18n/browser/${this.currentLang}/assets/${imageName}`;
  }
}

