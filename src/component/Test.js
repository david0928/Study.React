import React from "react";

const TestPrivate = (props) => {
    return <div> ------ {props.name} ------ </div>;
};

const Test1 = (props) =>{
    return (
        <div className="App">
            Test1: {TestPrivate(props)}
        </div>
    );
};

class Test2 extends React.Component {
    render() {
        return (
            <div className="App">
                Test2: {TestPrivate(this.props)}
            </div>
        );
    }
}

export {Test1, Test2};