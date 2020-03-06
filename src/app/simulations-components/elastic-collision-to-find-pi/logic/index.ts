import { animationStart, animationStop } from '@simulations-scripts/common';

import { Program } from './Program';
import { ElasticCollisionData } from '../../../shared/models/ComponentData';

export const animate = (canvasElement: HTMLCanvasElement,
                        data: ElasticCollisionData) => {
  animationStart(Program, canvasElement, data);
};

export const stop = animationStop;
