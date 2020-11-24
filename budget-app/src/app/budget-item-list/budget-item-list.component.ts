import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[]; 
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDeleteBtnClicked(item: BudgetItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem) {
    //show the edit module
    const dialogRef = this.dialog.open(EditItemComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      //check if result has a value
      if (result) {
        //this.budgetItems[this.budgetItems.indexOf(item)] = result;

        this.update.emit({
          oldEvent: item,
          newEvent: result
        });
      }
    })
  }
}

export interface UpdateEvent {
  oldEvent: BudgetItem;
  newEvent: BudgetItem;
}
