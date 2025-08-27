import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Educations } from 'src/app/models/portfolio.models';

@Component({
  selector: 'app-education',
  imports: [CommonModule, CardModule, TagModule, ButtonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  @Input() education?: Educations;
  openWebsite(website: string): void {
    const url = website.startsWith('http') ? website : `https://${website}`;
    window.open(url, '_blank');
  }
}
