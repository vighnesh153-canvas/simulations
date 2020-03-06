import {
  Component, EventEmitter,
  Input,
  OnInit, Output
} from '@angular/core';

@Component({
  selector: 'app-integer-input',
  templateUrl: './integer-input.component.html',
  styleUrls: ['./integer-input.component.scss']
})
export class IntegerInputComponent implements OnInit {
  @Input() min = 1;
  @Input() max = 9;
  @Input() step = 1;
  @Input() note = 'This is an input component';
  @Input() title = 'Title';
  @Input() currentValue = 5;

  @Output() value = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.emitCurrentValue();
  }

  emitCurrentValue() {
    this.value.emit(this.currentValue);
  }

  increment() {
    this.currentValue = Math.min(this.currentValue + this.step, this.max);
    this.emitCurrentValue();
  }

  decrement() {
    this.currentValue = Math.max(this.currentValue - this.step, this.min);
    this.emitCurrentValue();
  }

}
