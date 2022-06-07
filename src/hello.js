import React from "react";
export default class hello extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( <
            div > hello <
            h1 > em yeu co < /h1> <
            h1 > { this.props.msg } < /h1> <
            h2 > { this.props } < /h2> <
            /div>
        );
    }
}