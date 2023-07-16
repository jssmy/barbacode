import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { Navtab } from '../../interfaces/nav-tab';
import { CommonModule } from '@angular/common';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-navtab',
  templateUrl: './navtab.component.html',
  styleUrls: ['./navtab.component.scss'],
  imports: [
    CommonModule
  ],
  standalone: true
})
export class NavtabComponent implements OnInit {
  @Input() tabs: Navtab[] = [];
  selected: Navtab = {} as Navtab;

  ngOnInit(): void {
    if(this.tabs.length) {
      const [selected] = this.tabs;
      this.selected = selected;
      this.onCick(this.selected);
    }
  }

  onCick(tab: Navtab) {
    if(!tab) return;
    this.selected = tab;

    const content = document.getElementById(tab.toogleTarget);
    if(!content) return;
    
    content.classList.add('show');
    content.classList.add('active');

    const inactiveNodes = this.tabs.filter(node => node.id !== this.selected.id);
    for(const inactiveNode of inactiveNodes) {
      const inactiveElement = document.getElementById(inactiveNode.toogleTarget);
      
      if(!inactiveElement) return;

      inactiveElement.classList.remove('show');
      inactiveElement.classList.remove('active');
    }

  }
}
