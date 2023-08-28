import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { DialogComponent } from '../dialog/dialog.component';

interface DropdownItem {
  text: string;
  checked: boolean;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  items: DropdownItem[] = [];

  constructor(private dialog: MatDialog) {
    for(let i = 1; i <= 1000; i++){
      this.items.push({ text: 'Title ${i}', checked: false });
    }
  }

  toggleItem(index: number) {
    this.items[index].checked = !this.items[index].checked;
  }

  openDialog(text: string) {
    this.dialog.open(DialogComponent, {
      data: {text},
    });
  }

}
