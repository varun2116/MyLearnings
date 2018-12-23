import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props){
        super(props);
        this.drawCanvas = this.drawCanvas.bind(this);
        this.arrowCanvas = this.arrowCanvas.bind(this);
        this.lineCanvas = this.lineCanvas.bind(this);
    }

    lineCanvas(context) {
        let { x0, y0, xtop, xlast, ytop, ylast } = this.props;
        //horizontal line
        context.moveTo(xtop, y0);
        context.lineTo(xlast, y0);
        context.stroke();

        //vertical line
        context.moveTo(x0, ytop);
        context.lineTo(x0, ylast);
        context.stroke();
    }

    arrowCanvas(context, x, y) {
        context.moveTo(x, y);
        context.lineTo(x + 5, y - 5);
        context.lineTo(x, y);
        context.lineTo(x + 5, y + 5);
        context.stroke();
    }

    drawCanvas(context) {
        let { x0, y0, xtop, xlast, ytop, ylast, x1, y1, x2, y2 } = this.props;
        context.beginPath();

    		context.lineJoin = "round";
    		context.strokeStyle = "#000";

    		//range
    		context.moveTo(x1, y1);
    		context.lineTo(x2, y1);
    		context.lineTo(x2, y2);
    		context.lineTo(x1, y2);
    		context.stroke();

    		//arrow head top
        this.arrowCanvas(context, x1, y2);
    		//arrow head bottom
        this.arrowCanvas(context, x1, y1);

        context.strokeStyle = "#d3d3d3";
        //graph
        this.lineCanvas(context);
    }

    componentDidMount() {
        const canvas = this.refs.myCanvas;
        var context = canvas.getContext('2d');
        this.drawCanvas(context);
    }

    render() {
        return (
          <div class="container">
    			   <canvas ref="myCanvas" id="myCanvas" width="400" height="400"></canvas>
		       </div>
        );
    }
}

export default Canvas;
