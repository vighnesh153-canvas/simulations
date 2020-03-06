import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';

import { ComponentDataType } from '../../shared/models/ComponentData';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit, OnDestroy, OnChanges {
  displayButton = false;
  animationRunning = false;

  @Input() data: ComponentDataType;

  @Input() displayCanvas = true;
  @Input() animateFunction:
    (canvasElement: HTMLCanvasElement, data: ComponentDataType) => void;
  @Input() stopAnimationFunction: () => void;

  @Input() title = 'Title';

  @Output() isShown = new EventEmitter<boolean>();

  @ViewChild('canvas') canvasElement: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit(): void {
    this.displayButton = true;
    this.isShown.emit(window.innerWidth > 625);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data === undefined) {
      return;
    }

    if (changes.data.previousValue === undefined ||
      (changes.data.currentValue.digits !==
      changes.data.previousValue.digits)) {

      if (this.animationRunning) {
        this.stopAnimationFunction();
        this.animationRunning = false;
      }
    }
  }

  toggleAnimation() {
    if (this.animationRunning === false) {
      this.animateFunction(this.canvasElement.nativeElement, this.data);
    } else {
      this.stopAnimationFunction();
    }

    this.animationRunning = !this.animationRunning;
  }

  ngOnDestroy(): void {
    if (this.displayCanvas) {
      this.stopAnimationFunction();
    }
  }

}
