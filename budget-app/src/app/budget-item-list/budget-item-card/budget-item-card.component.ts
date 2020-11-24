import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

@Input() item: BudgetItem;
@Output() xBtnClick: EventEmitter<any> = new EventEmitter<any>();
@Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onXBtnClick() {
    this.xBtnClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }

}