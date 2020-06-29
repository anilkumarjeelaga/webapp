import { Component, OnInit } from '@angular/core';
import { ColorChangeService } from '../color-change.service';

@Component({
  selector: 'app-colorful-text',
  templateUrl: './colorful-text.component.html',
  styleUrls: ['./colorful-text.component.css'],
})
export class ColorfulTextComponent implements OnInit {
  color: string = 'blue';
  constructor(private colorChange: ColorChangeService) {}

  ngOnInit(): void {
    this.colorChange.color$.subscribe((color) => (this.color = color));
  }
}
