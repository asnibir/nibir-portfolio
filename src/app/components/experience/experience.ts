import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Experiences } from 'src/app/models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, ButtonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  @Input() experiences?: Experiences;

  openWebsite(website: string): void {
    const url = website.startsWith('http') ? website : `https://${website}`;
    window.open(url, '_blank');
  }

}
