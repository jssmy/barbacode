import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  onClick($event: any) {
    const targetTabContainerId = $event.target?.dataset?.bsTarget;
    const currentTabId = $event.target.id;

    const tabs = Array.from(document.querySelectorAll('ul .nav-item .nav-link'));
    
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(currentTabId)?.classList.add('active');
    const tabsContainer = Array.from(document.getElementsByClassName('faq-list'));
    tabsContainer.forEach(container => container.classList.add('display-none'));
    
    document.getElementById(targetTabContainerId)?.classList.remove('display-none');
  }
}
