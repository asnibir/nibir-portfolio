import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AboutComponent } from './components/about/about.component';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Research } from './components/research/research';
import { SkillsComponent } from './components/skills/skills';
import { SocialLinks } from './components/social-links/social-links';
import { PortfolioData } from './models/portfolio.models';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    SocialLinks,
    Experience,
    SkillsComponent,
    Education,
    Research,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  portfolioData$: Observable<PortfolioData | null>;

  constructor(private portfolioService: PortfolioService) {
    this.portfolioData$ = this.portfolioService.getPortfolioData();
  }
  ngOnInit(): void {
    // if needed
  }
}
