import React from "react";
import Component from "starter/component";

class MyComponent extends Component {
    constructor(props) {
        super(props);

        this.bind("onClick");
    }

    render() {
        return <div onClick={this.onClick}>my component</div>;
    }

    onClick() {
        console.log(this.constructor.name + " was clicked!");
    }
}

MyComponent.propTypes = {
    // "myProperty": React.PropTypes.string
    // "myShape": React.PropTypes.shape({})
};

export default MyComponent;
