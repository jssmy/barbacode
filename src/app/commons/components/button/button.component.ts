import {Component, Input, OnInit, Output} from '@angular/core';
import {TypeButton} from "../../interfaces/type-button";
import {StyledButton} from "../../interfaces/styled-button";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class ButtonComponent implements OnInit{
  @Input() type?: TypeButton = 'default';
  @Input() styled?: StyledButton = 'filled';
  @Input() color?: string = 'inherit';
  @Input() background?: string;
  @Input() toRoute?: string[];

  @Input() styleClass? = {};

  constructor(
  private readonly router: Router
  ) {
  }
  ngOnInit(): void {
    this.addAttribButton('color');
    this.addAttribButton('background');
    console.log(this.styleClass);
  }

  private addAttribButton(attrName: string): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const attribs: any = this;
    const attrValue = attribs[attrName];
    if(!attrValue) return;
    const style = this.styleClass;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    style[attrName] = attrValue;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    style[`--${attrName}`] = attrValue;
    if(attrValue) {
      this.styleClass = {
        ...style
      };
    }
  }

  onClick() {
    if(this.toRoute) {
      this.router.navigate(this.toRoute).finally();
    }
  }
}
