import { Canvas } from '@simulations-scripts/Canvas';

const updateVelocities = (b1: Block, b2: Block, v1: number, v2: number) => {
  const sumOfMasses = b1.Mass + b2.Mass;
  b1.velocity = (b1.Mass - b2.Mass) * v1 / sumOfMasses;
  b1.velocity += 2 * b2.Mass * v2 / sumOfMasses;
};

export class Block {
  get Mass() { return this.mass; }

  constructor(
    public x: number,
    private y: number,
    private size: number,
    private color: string,
    public mass: number,
    public velocity: number
  ) {
  }

  draw(canvas: Canvas, block?: Block) {
    if (block) {
      canvas.drawFilledRect(
        Math.max(this.x, block.size), this.y, this.size, this.size, this.color
      );
    } else {
      canvas.drawFilledRect(
        Math.max(this.x, 0), this.y, this.size, this.size, this.color
      );
    }
  }

  update() {
    this.x += this.velocity;
  }

  handleCollision(other: Block, info: { countOfCollisions: number }) {
    if (this.x < 0) {
      this.velocity = Math.abs(this.velocity);
      info.countOfCollisions++;
    }

    if (this.x + this.size >= other.x) {
      const v1 = this.velocity;
      const v2 = other.velocity;
      updateVelocities(this, other, v1, v2);
      updateVelocities(other, this, v2, v1);
      info.countOfCollisions++;
    }
  }
}
