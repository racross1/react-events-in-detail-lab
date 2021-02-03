import React, { Component } from 'react';

class CoordinatesButton extends Component {
    

    render() {
        return (
            <button onClick={(e) => this.props.onReceiveCoordinates([e.pageX, e.pageY])}>Coordinates Button</button>
        )
    }

}

export default CoordinatesButton

