import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react';
import {genRandomColor, genRandomPosition} from '../helpers'
import BoxContainer from './boxContainer';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: [
                {
                    color: 'red',
                    pos: genRandomPosition()
                },
                {
                    color: 'yellow',
                    pos: genRandomPosition()
                },
                {
                    color: 'purple',
                    pos: genRandomPosition()
                },
                {
                    color: 'blue',
                    pos: genRandomPosition()
                },
                {
                    color: 'hotpink',
                    pos: genRandomPosition()
                },
            ]
        };

        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(index){
        const newBoxes = this.state.boxes.slice();
        
        newBoxes[index].color = genRandomColor();
        newBoxes[index].pos = genRandomPosition();

        this.setState({
            boxes: newBoxes
        });
    }

    render(){
        const boxElements = this.state.boxes.map((item, index) => {
            return <BoxContainer key={index} pos={item.pos} newColor={() => this.changeColor(index)} color={item.color}/> 
        });
    
        return(
        <div className="container">
            <h1 className="text-center my-3">Components Demo</h1>
            {boxElements}
        </div>
        );
    }
};

export default App;
