import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Links } from 'src/app/models/portfolio.models';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss'
})
export class SocialLinks {
  @Input() links?: Links;

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
