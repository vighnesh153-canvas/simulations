import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit, OnDestroy {
  displayButton = false;
  animationRunning = false;

  @Input() displayCanvas = true;
  @Input() animateFunction: (canvasElement: HTMLCanvasElement) => void;
  @Input() stopAnimationFunction: () => void;

  @Input() title = 'Title';
  @ViewChild('canvas', { static: true })  // static: true, to use in ngOnInit
  canvasElement: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit(): void {
    this.displayButton = true;
  }

  toggleAnimation() {
    if (this.animationRunning === false) {
      this.animateFunction(this.canvasElement.nativeElement);
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
