import React, { Component } from 'react';
import { Responsive } from "semantic-ui-react";
class CanvasForOverview extends Component {
    state = {}
    componentDidMount() {
        this.updateCanvas();
        console.log("com did mount");
    }
    updateCanvas() {
        console.log("update canvas");
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
    render() {
        return (
            <Responsive>
                <canvas ref="canvas" width={window.innerWidth} height={764} />
            </Responsive>
        );
    }
}
export default CanvasForOverview;
