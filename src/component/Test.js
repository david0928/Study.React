const TestPrivate = (props) => {
    return <div> ------ {props.name} ------ </div>;
};


const Test1 = (props) =>{
    return (
        <div className="App">
        {TestPrivate(props)}
    </div>
    );
};

const Test2 = (props) =>{
    return (
        <div className="App">
        <p>
          xxx {props.name} xxx
        </p>
    </div>
    );
};

export {Test1, Test2};