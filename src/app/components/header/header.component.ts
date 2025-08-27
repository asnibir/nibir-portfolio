import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { Contact, Email, Intro, Resume } from 'src/app/models/portfolio.models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, AvatarModule, ChipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() intro?: Intro;
  @Input() resume?: Resume;
  @Input() contact?: Contact;
  @Input() email?: Email;

  openResume(): void {
    window.open(this.resume?.url, '_blank');
  }

  downloadResume(): void {
    if (this.resume?.download) {
      const link = document.createElement('a');
      link.href = this.resume.download;
      link.download = 'resume.pdf';
      link.click();
    }
  }

  sendEmail(): void {
    if (this.email?.url) {
      window.open(this.email.url, '_blank');
    }
  }

}
