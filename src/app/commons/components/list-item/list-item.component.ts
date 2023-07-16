import {Component, Input} from '@angular/core';
const { v4: uuid } = require('uuid');


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  standalone: true
})
export class ListItemComponent {
  idCollapable = uuid();
  idIconCollapsable = uuid();

  onClick() {
    const nodeCollapsable = document.getElementById(this.idCollapable);
    const nodeIconCollapsable = document.getElementById(this.idIconCollapsable);
    
    if(!nodeCollapsable) return;

    nodeCollapsable.classList.toggle('show');

    if(!nodeIconCollapsable) return;

    nodeIconCollapsable.classList.toggle('icon-collapsed');

    if(nodeCollapsable.style.maxHeight) {
        nodeCollapsable.style.maxHeight = '';
    } else {
      nodeCollapsable.style.maxHeight = nodeCollapsable.scrollHeight + 'px';
    }
  }
}
