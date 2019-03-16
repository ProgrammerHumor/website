import React, { Component } from 'react';
class canvasForOverview extends Component {
    state = {}
    componentDidMount() {
        this.updateCanvas();
        console.log("com did mount");
    }
    updateCanvas() {
        console.log("update canvas");
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0, 0, 100, 100);
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300} />
        );
    }
}
export default canvasForOverview;
