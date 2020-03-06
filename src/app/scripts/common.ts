import { ComponentDataType } from '../shared/models/ComponentData';

let animateInterval;

export const animationStart = (Program, canvasElement: HTMLCanvasElement, data: ComponentDataType) => {
  const program = new Program(canvasElement, animationStop, data);
  animateInterval = setInterval(() => {
    program.plot();
    program.update();
  }, 1);
};

export const animationStop = () => {
  if (animateInterval) {
    clearInterval(animateInterval);
    animateInterval = null;
  }
};
