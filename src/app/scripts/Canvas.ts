export class Canvas {
  private canvas = null;
  private canvasContext = null;

  get width(): number {
    return this.canvas.width;
  }

  get height(): number {
    return this.canvas.height;
  }

  constructor(canvas: HTMLCanvasElement) {
    this.drawBitmap = this.drawBitmap.bind(this);
    this.drawFilledRect = this.drawFilledRect.bind(this);
    this.drawOutlineRect = this.drawOutlineRect.bind(this);
    this.drawLine = this.drawLine.bind(this);
    this.drawFilledCircle = this.drawFilledCircle.bind(this);
    this.drawBitmap = this.drawBitmap.bind(this);
    this.writeText = this.writeText.bind(this);

    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext('2d');
  }

  drawBitmap(useBitmap, x: number, y: number, angle: number) {
    this.canvasContext.save();
    this.canvasContext.translate(x, y);
    this.canvasContext.rotate(angle);
    this.canvasContext.drawImage(useBitmap, -useBitmap.width / 2, -useBitmap.height / 2);
    this.canvasContext.restore();
  }

  drawFilledRect(x: number, y: number, width: number, height: number, color: string) {
    this.canvasContext.fillStyle = color;
    this.canvasContext.fillRect(x, y, width, height);
  }

  drawOutlineRect(x: number, y: number, width: number, height: number, color: string) {
    this.canvasContext.strokeStyle = color;
    this.canvasContext.strokeRect(x, y, width, height);
  }

  drawRoundedRect(
    x: number, y: number, width: number, height: number, radius: number, color: string
  ) {
    this.canvasContext.beginPath();
    this.canvasContext.strokeStyle = color;
    this.canvasContext.moveTo(x + width - radius, y + height);
    this.canvasContext.arcTo(x, y + height, x, y, radius);
    this.canvasContext.arcTo(x, y, x + width, y, radius);
    this.canvasContext.arcTo(x + width, y, x + width, y + height, radius);
    this.canvasContext.arcTo(x + width, y + height, x, y + height, radius);
    this.canvasContext.stroke();
  }

  drawLine(x1: number, y1: number, x2: number, y2: number, lineWidth: number, color: string) {
    this.canvasContext.save();
    this.canvasContext.beginPath();
    this.canvasContext.lineWidth = lineWidth;
    this.canvasContext.strokeStyle = color;
    this.canvasContext.moveTo(x1, y1);
    this.canvasContext.lineTo(x2, y2);
    this.canvasContext.stroke();
    this.canvasContext.restore();
  }

  drawDashedLine(x1: number, y1: number, x2: number, y2: number, lineWidth: number, color: string, dashParams) {
    this.canvasContext.setLineDash(dashParams);
    this.drawLine(x1, y1, x2, y2, lineWidth, color);
    this.canvasContext.setLineDash([]);
  }

  drawFilledCircle(centerX: number, centerY: number, radius: number, color: string) {
    this.canvasContext.beginPath();
    this.canvasContext.fillStyle = color;
    this.canvasContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
    this.canvasContext.fill();
  }

  writeText(text: string, x: number, y: number, fontSize: number, color: string) {
    this.canvasContext.fillStyle = color;
    const fontArgs = this.canvasContext.font.split(' ');
    this.canvasContext.font = `${fontSize}px ${fontArgs[fontArgs.length - 1]}`;
    this.canvasContext.fillText(text, x, y);
  }
}


// Mouse handler
// let mouseX, mouseY;
// canvas.addEventListener('mousemove', function (event) {
//         let rect = canvas.getBoundingClientRect();
//         let root = document.documentElement;

//         mouseX = event.clientX - rect.left - root.scrollLeft;
//         mouseY = event.clientY - rect.top - root.scrollTop;
//     });
