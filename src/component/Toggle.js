import React from "react";

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true, isToggleOn2 : true};

        // 綁定方法 1: constructor 內綁定 (為了讓 `this` 能在 callback 中被使用)
        this.handleClick1 = this.handleClick1.bind(this);
      }
    
      handleClick1() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

      // 綁定方法 2: class field 語法綁定 (為了讓 `this` 能在 callback 中被使用)
      handleClick2 = () => {
        this.setState(state => ({
            isToggleOn2: !state.isToggleOn2
          }));        
      }
    
      render() {
        return (
            <>
                <button onClick={this.handleClick1}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <button onClick={this.handleClick2}>
                    {this.state.isToggleOn2 ? 'YES' : 'NO'}
                </button>      
            </>    
        );
      }
}

export default Toggle;