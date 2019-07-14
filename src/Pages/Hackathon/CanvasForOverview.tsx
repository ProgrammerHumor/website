import React, { Component } from 'react';


class Line {
  parent: any;
  vx: number;
  width: number;
  x: number;
  y: number;
  vy: any;
  dist: any;
  minDist: number;
  maxDist: number;
  ctx: any;
  canvas: any;
  w: any;
  h: any;
  getColor: any;
  lines: any;
  frame: any;
  constructor(parent: any, canvas: any, getColor: any, lines: any, frame: any) {
    this.x = parent.x | 0;
    this.y = parent.y | 0;
    this.width = parent.width / 1.25;
    const speed = 1;
    this.canvas = canvas;
    this.w = canvas.width;
    this.h = canvas.height;
    this.ctx = canvas.getContext('2d');
    this.getColor = getColor;
    this.lines = lines;
    this.frame = frame;
    const dirs = [
      // straight x, y velocity
         [ 0, 1 ],
         [ 1, 0 ],
         [ 0, -1 ],
         [ -1, 0 ],
      // diagonals, 0.7 = sin(PI/4) = cos(PI/4)
         [ .7, .7 ],
         [ .7, -.7 ],
         [ -.7, .7 ],
         [ -.7, -.7]
       ];
       this.minDist = 20;
       this.maxDist = 100;
    do {
      
      const dir = dirs[ ( Math.random() * dirs.length ) |0 ];
      this.vx = dir[ 0 ];
      this.vy = dir[ 1 ];
      
    } while ( 
      ( this.vx === -parent.vx && this.vy === -parent.vy ) || ( this.vx === parent.vx && this.vy === parent.vy) );
    
    this.vx *= speed;
    this.vy *= speed;
    
    this.dist = ( Math.random() * ( this.maxDist - this.minDist ) + this.minDist );
  }
  
  step() {
    let dead = false;
  
    let prevX = this.x,
        prevY = this.y;
    
    this.x += this.vx;
    this.y += this.vy;
    
    --this.dist;
    
    // kill if out of screen
    if( this.x < 0 || this.x > this.w || this.y < 0 || this.y > this.h )
      dead = true;
    
    // make children :D
    if( this.dist <= 0 && this.width > 1 ) {
      
      // keep yo self, sometimes
      this.dist = Math.random() * ( this.maxDist - this.minDist ) + this.minDist;
      
      const maxLines = 100;

      // add 2 children
      if( this.lines.length < maxLines ) this.lines.push( new Line( this, this.canvas, this.getColor, this.lines, this.frame ) );
      if( this.lines.length < maxLines && Math.random() < .5 ) this.lines.push( new Line( this, this.canvas, this.getColor , this.lines, this.frame) );
      
      // kill the poor thing
      if( Math.random() < .2 ) dead = true;
    }
    
    this.ctx.strokeStyle = this.ctx.shadowColor = this.getColor( this.x, this.w, this.frame );
    this.ctx.beginPath();
    this.ctx.lineWidth = this.width;
    this.ctx.moveTo( this.x, this.y );
    this.ctx.lineTo( prevX, prevY );
    this.ctx.stroke();
    
    if( dead ) return true
  }
}

class CanvasForOverview extends Component {
  refs!: { canvas: any }
  frame: number;
  ctx: any;
  lines: any;
  h: any;
  w: any;
  timeSinceLast: any;
  initialWidth: number;
  LoopRuning: boolean;
  starter: any;
  constructor(props: any){
    super(props);
    this.LoopRuning = true;
    this.frame = 0;
    this.lines = [];
        
    
    this.timeSinceLast = 0;
    this.initialWidth = 10;


  }
  componentDidMount() {
    this.init();
    this.anim();
  }
  init() {
    this.ctx = this.refs.canvas.getContext('2d');
    this.w = this.refs.canvas.width;
    this.h = this.refs.canvas.height;

    this.starter = { // starting parent line, just a pseudo line
      
      x: this.w / 2,
      y: this.h / 2,
      vx: 0,
      vy: 0,
      width: this.initialWidth
    };
    
    const initialLines = 4;
        

    this.lines.length = 0;
  
    for( var i = 0; i < initialLines; ++i )
      this.lines.push( new Line( this.starter, this.refs.canvas, this.getColor, this.lines, this.frame ) );

    this.ctx.fillStyle = '#222';
    this.ctx.fillRect( 0, 0, this.w, this.h );
    
    // if you want a cookie ;)
    // this.ctx.lineCap = 'round';
  }

  componentWillUnmount = () => {
    this.LoopRuning = false;
  }

  anim = () => {
      if (this.LoopRuning){
      window.requestAnimationFrame( this.anim );
      ++this.frame;
      
      this.ctx.shadowBlur = 0;
      this.ctx.fillStyle = 'rgba(0,0,0,.02)';
      this.ctx.fillRect( 0, 0, this.w, this.h );
      this.ctx.shadowBlur = .5;
      
      for( var i = 0; i < this.lines.length; ++i ) 
        
        if( this.lines[ i ].step() ) { // if true it's dead
          
          this.lines.splice( i, 1 );
          --i;
          
        }
      
      // spawn new
      
      ++this.timeSinceLast
      
      const maxLines = 100;
      if( this.lines.length < maxLines && this.timeSinceLast > 10 && Math.random() < .5 ) {
        
        this.timeSinceLast = 0;
        
        this.lines.push( new Line( this.starter, this.refs.canvas, this.getColor, this.lines, this.frame ) );
        
        // cover the middle;
        this.ctx.fillStyle = this.ctx.shadowColor = this.getColor( this.starter.x, this.w, this.frame);
        this.ctx.beginPath();
        this.ctx.arc( this.starter.x, this.starter.y, this.initialWidth, 0, Math.PI * 2 );
        this.ctx.fill();
      }
    }
  }

  getColor( x: any, w: any, frame: any ) {
  
    return 'hsl( hue, 80%, 50% )'.replace(
      'hue', x / w * 360 + frame
    );
  }

  render() {
    return (
      <div className="divForOverview">
        <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight} />
      </div>
    );
  }
}
export default CanvasForOverview;
