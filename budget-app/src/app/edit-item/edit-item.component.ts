import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  //@Input() item: BudgetItem;

  constructor(public dialogRef: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) { }

  ngOnInit(): void {
  }

  onSubmitted(item: BudgetItem) { 
    this.dialogRef.close(item);
  }

}
