import React from "react";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>my component</div>;
    }
}

MyComponent.propTypes = {
    // "myProperty": React.PropTypes.string
};

export default MyComponent;
