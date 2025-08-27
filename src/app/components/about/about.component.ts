import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { About } from 'src/app/models/portfolio.models';

@Component({
  selector: 'app-about',
  imports: [CommonModule, CardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input() about?: About;
}
