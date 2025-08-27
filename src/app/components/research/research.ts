import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { Researches } from 'src/app/models/portfolio.models';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, ChipModule],
  templateUrl: './research.html',
  styleUrl: './research.scss'
})
export class Research {
  @Input() research?: Researches;

  openPublication(url: string): void {
    window.open(url, '_blank');
  }

}
