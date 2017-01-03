import React, { Component } from 'react';

export default class Inputs extends Component {
  
  constructor(){
    super();
    this.state = {
      inputList: []
    }
  };
  
  componentDidMount() {
    this.nameInput.focus()
  }
  
 handleChange = (value, index)  => {
   
   let newState = this.state.inputList;
   newState[index] = value;
   this.setState({ inputList: [...newState]});
    
  };
  
  render() {
  const { onValidate, error } = this.props;
  const style = { backgroundColor: error && !this.state.inputList.length ? 'red' : 'yellow' };
  
    return (
      <div className="inputs">
        <input type="text" onChange={ (e) => this.handleChange(e.target.value, 0) } ref={(input) => { this.nameInput = input; }}/>
        <input type="text" onChange={ (e) => this.handleChange(e.target.value, 1) }/>
        <input type="text" onChange={ (e) => this.handleChange(e.target.value, 2) }/>
        <input type="text" onChange={ (e) => this.handleChange(e.target.value, 3) }/>
        <div className="validate-button" style={style} onClick={ () => onValidate(...this.state.inputList) }> ok </div>
        
      </div>
    );
  }
}