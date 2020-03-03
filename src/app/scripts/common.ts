let animateInterval;

export const animationStart = (Program, canvasElement: HTMLCanvasElement) => {
  const program = new Program(canvasElement);
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
