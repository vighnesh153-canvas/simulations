import { Component, OnInit } from '@angular/core';

import { animate, stop } from './logic';
import { ElasticCollisionData } from '../../shared/models/ComponentData';

@Component({
  selector: 'app-elastic-collision-to-find-pi',
  templateUrl: './elastic-collision-to-find-pi.component.html',
  styleUrls: [
    './elastic-collision-to-find-pi.component.scss',
    '../../styles/common-component.scss'
  ]
})
export class ElasticCollisionToFindPIComponent implements OnInit {
  animateFunc = animate;
  stopAnimationFunc = stop;

  displayDataSection: boolean;
  data: ElasticCollisionData = { digits: 5 };

  constructor() { }

  ngOnInit(): void {
  }

  isCanvasDisplayed(value: boolean) {
    this.displayDataSection = value;
  }

  valueChanged(value: number) {
    this.data = { ...this.data};
    this.data.digits = value;
  }

}
