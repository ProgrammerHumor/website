import React, { Component } from 'react';
class CanvasForOverview extends Component {
  refs!: { canvas: any }
  state = {}
  componentDidMount() {
    // history.replaceState(null, '', ' ')
    let anchorlinks = document.querySelectorAll('a[href^="/Hackathon#"]');

    for (let item of anchorlinks) { // relitere 
      item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href');
        if (hashval) {
          let target = document.querySelector(hashval.replace('/Hackathon', ''));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
            history.pushState(null, '', hashval)
            e.preventDefault()
          }
        }
      })
    }
    this.updateCanvas();
    console.log("com did mount");
  }
  updateCanvas() {
    console.log("update canvas");
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.refs.canvas.width, this.refs.canvas.height)
    const { PI, cos, sin, abs, sqrt, pow, round, random, atan2 } = Math;
    const HALF_PI = 0.5 * PI;
    const TAU = 2 * PI;
    const TO_RAD = PI / 180;
    const rand = (n: number) => n * random();
    const fadeInOut = (t: number, m: number) => {
      let hm = 0.5 * m;
      return abs((t + hm) % m - hm) / (hm);
    };
    const pipeCount = 30;
    const pipePropCount = 8;
    const pipePropsLength = pipeCount * pipePropCount;
    const turnCount = 8;
    const turnAmount = (360 / turnCount) * TO_RAD;
    const turnChanceRange = 58;
    const baseSpeed = 0.5;
    const rangeSpeed = 1;
    const baseTTL = 100;
    const rangeTTL = 300;
    const baseWidth = 2;
    const rangeWidth = 4;
    const baseHue = 180;
    const rangeHue = 60;

    let center: number[] = [];
    center[0] = 0.5 * this.refs.canvas.width;
    center[1] = 0.2 * this.refs.canvas.height;
    let tick: number;
    let pipeProps: Float32Array;

    const initPipes = () => {
      pipeProps = new Float32Array(pipePropsLength);

      let i;

      for (i = 0; i < pipePropsLength; i += pipePropCount) {
        initPipe(i);
      }
    }

    const initPipe = (i: number) => {
      let x, y, direction, speed, life, ttl, width, hue;

      x = rand(this.refs.canvas.width);
      y = center[1];
      direction = (round(rand(1)) ? HALF_PI : TAU - HALF_PI);
      speed = baseSpeed + rand(rangeSpeed);
      life = 0;
      ttl = baseTTL + rand(rangeTTL);
      width = baseWidth + rand(rangeWidth);
      hue = baseHue + rand(rangeHue);

      pipeProps.set([x, y, direction, speed, life, ttl, width, hue], i);
    }

    const updatePipes = () => {
      tick++;

      let i;

      for (i = 0; i < pipePropsLength; i += pipePropCount) {
        updatePipe(i);
      }
    }

    const updatePipe = (i: number) => {
      let i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i, i7 = 6 + i, i8 = 7 + i;
      let x, y, direction, speed, life, ttl, width, hue, turnChance, turnBias;

      x = pipeProps[i];
      y = pipeProps[i2];
      direction = pipeProps[i3];
      speed = pipeProps[i4];
      life = pipeProps[i5];
      ttl = pipeProps[i6]
      width = pipeProps[i7];
      hue = pipeProps[i8];

      drawPipe(x, y, life, ttl, width, hue);

      life++;
      x += cos(direction) * speed;
      y += sin(direction) * speed;
      turnChance = !(tick % round(rand(turnChanceRange))) && (!(round(x) % 6) || !(round(y) % 6));
      turnBias = round(rand(1)) ? -1 : 1;
      direction += turnChance ? turnAmount * turnBias : 0;

      pipeProps[i] = x;
      pipeProps[i2] = y;
      pipeProps[i3] = direction;
      pipeProps[i5] = life;

      checkBounds(x, y);
      life > ttl && initPipe(i);
    }

    const drawPipe = (x: number, y: number, life: number, ttl: number, width: number, hue: number) => {
      ctx.save();
      ctx.strokeStyle = `hsla(${hue},75%,50%,${fadeInOut(life, ttl) * 0.125})`;
      ctx.beginPath();
      ctx.arc(x, y, width, 0, TAU);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }

    const checkBounds = (x: number, y: number) => {
      if (x > this.refs.canvas.width) x = 0;
      if (x < 0) x = this.refs.canvas.width;
      if (y > this.refs.canvas.height) y = 0;
      if (y < 0) y = this.refs.canvas.height;
    }

    const draw = () => {
      updatePipes();

      window.requestAnimationFrame(draw);
    }
    initPipes();
    draw();
  }
  render() {
    return (
      <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight} />
    );
  }
}
export default CanvasForOverview;
