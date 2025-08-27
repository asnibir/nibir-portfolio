import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Skills } from 'src/app/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  @Input() skills?: Skills;
}
