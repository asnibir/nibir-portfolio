import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { License } from 'src/app/models/portfolio.models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() license?: License;
  angularVersion = '20';
}
