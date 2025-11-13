import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false
})
export class CardComponent {
  @Input() image = '';
  @Input() overlayText = '';
  @Input() title = '';
  @Input() buttonText = '';
  @Input() buttonIcon = 'add';
  @Input() isAddCard = false;
  @Input() focus = true;
  @Input() isContentCard = false;
  @Output() cardClick = new EventEmitter<void>();
  @Output() buttonClick = new EventEmitter<void>();

  onCardClick() {
    if (this.isAddCard) {
      this.buttonClick.emit();
    } else {
      this.cardClick.emit();
    }
  }

  onButtonClick(event: Event) {
    event.stopPropagation();
    this.buttonClick.emit();
  }
}

