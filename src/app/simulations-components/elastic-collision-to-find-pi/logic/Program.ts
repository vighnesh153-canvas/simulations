import { IProgram } from '@simulations-scripts/IProgram';

import { Canvas } from '@simulations-scripts/Canvas';
import { Block } from './Block';

import { elasticCollisionData } from '../data';
import { ElasticCollisionData } from '../../../shared/models/ComponentData';

export class Program implements IProgram {
  canvas: Canvas;
  data = elasticCollisionData;

  info = {
    countOfCollisions: 0
  };

  numberOfDigits: number;
  speedOfB2: number;
  repetition: number;
  // needed to speed things up

  block1 = new Block(
    this.data.block1.x, this.data.block1.y,
    this.data.block1.size, this.data.block1.color,
    this.data.block1.mass, this.data.block1.velocity
  );
  block2 = new Block(
    this.data.block2.x, this.data.block2.y, this.data.block2.size,
    this.data.block2.color, 0, 0);

  animationStopper: () => {};

  constructor(e: HTMLCanvasElement, animationStopper: () => {}, data: ElasticCollisionData) {
    this.canvas = new Canvas(e);
    this.animationStopper = animationStopper;
    this.numberOfDigits = data.digits;
    this.speedOfB2 = data.digits > 3 ? (10 ** (data.digits - 3)) : 10;
    this.repetition = this.speedOfB2;
    this.block2.x = this.data.block2.x;
    this.block2.mass = 100 ** (data.digits - 1);
    this.block2.velocity = -1 / this.speedOfB2;
  }

  plot() {
    this.renderBackground();
    this.writeNumberOfHits();
    this.writePrecisionValue();
    this.renderBlocks();
  }

  update() {
    if (this.numberOfDigits <= 3) {
      this.repetition = 1;
    }

    for (let i = 0; i < this.repetition; i++) {
      this.block1.update();
      this.block2.update();
      this.block1.handleCollision(this.block2, this.info);
    }

    if (this.block1.x > this.canvas.width) {
      this.animationStopper();
    }
  }

  renderBackground() {
    const { heightOfPavement, pavementColor } = this.data;

    this.canvas.drawFilledRect(
      0, 0, this.canvas.width, this.canvas.height, 'white',
    );

    this.canvas.drawFilledRect(
      0, this.canvas.height - heightOfPavement, this.canvas.width,
      heightOfPavement, pavementColor,
    );
  }

  renderBlocks() {
    this.block1.draw(this.canvas);
    this.block2.draw(this.canvas, this.block1);
  }

  writeNumberOfHits() {
    const { heightOfPavement } = this.data;
    const text = `Number of Collisions: ${this.info.countOfCollisions}`;

    this.canvas.writeText(
      text, 10, this.canvas.height - heightOfPavement + 35,
      25, 'white'
    );
  }

  writePrecisionValue() {
    const text = `Precision: ${this.numberOfDigits}`;

    this.canvas.writeText(
      text, 330, 70,
      25, 'red'
    );
  }
}
