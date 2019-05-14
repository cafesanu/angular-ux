import { Component, OnInit, SecurityContext, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() public icon: string;
  @Input() public size: number;
  @Input() public fill: string;

  constructor(
  ) {
    this.size = 24;
    this.fill = '#555';
  }

  ngOnInit() {
  }

}
