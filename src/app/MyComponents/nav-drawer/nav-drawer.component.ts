import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css']
})
export class NavDrawerComponent {
  @Output() closeDrawerEvent = new EventEmitter();

  closeDrawer() {
    this.closeDrawerEvent.emit();
  }

}
