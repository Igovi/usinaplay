import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
  standalone: false
})
export class SectionTitleComponent {
  @Input() title = '';
  @Input() badgeText = '';
  @Input() showAddButton = false;
  @Output() addClick = new EventEmitter<void>();

  onAddClick() {
    this.addClick.emit();
  }
}

