import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-details',
  standalone: false,
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.scss'
})
export class MessageDetailsComponent {
  
  @Input()
  message: any = {};
  @Input()
  index: number = -1;

  @Output()
  delete: EventEmitter<any> = new EventEmitter<any>();
  onDelete(){
    this.delete.emit(this.index);
  }
}
