import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: false
})
export class UserProfileComponent {
  @Input() userName: string = 'Leonardo Santos';
  @Input() userLevel: string = 'Nível Roxo';
  @Input() userLevelColor: string = '#6134D0';
  @Input() userImage: string = '';
  @Output() buttonClick = new EventEmitter<string>();

  buttons = [
    { id: 'my-body', label: 'MEU CORPO', icon: 'body' },
    { id: 'goals', label: 'OBJETIVOS E CONQUISTAS', icon: 'trophy' }
  ];

  onButtonClick(buttonId: string): void {
    this.buttonClick.emit(buttonId);
  }
}

