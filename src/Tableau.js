import React, { Component } from 'react';
import PostIt from './PostIt';
import Inputs from "./Inputs";

export default class Tableau extends Component {
  
  constructor(){
    super();
    this.state = {
      showInputs: false,
      error: false,
      postItList: []
    }
  };
  
  onClickAdd = () => {
    this.setState({showInputs: !this.state.showInputs})
  };
  
  onClickValidate = (...inputs) => {
    if (inputs.length) {
      this.setState({
        postItList: [...this.state.postItList, [...inputs]],
        showInputs: !this.state.showInputs
      })
    } else {
      this.setState({error: true})
    }
  };
  
  onClickDelete = () => {
    return (index) => {
      let newState = this.state.postItList;
      newState.splice(index, 1);
      this.setState({postItList: newState});
    }
  };
  
  render() {
    const { postItList, showInputs } = this.state;
    
    return (
    
      <div className="tableau">
        
        {
          showInputs
          ? <Inputs onValidate={ this.onClickValidate } error={this.state.error}/>
          : <div className="add-button" onClick={ this.onClickAdd }> + </div>
        }
  
        {  postItList.map( (postItTasks, index) => {
              return (
                <PostIt
                  tasks={ postItTasks }
                  onDelete={ this.onClickDelete() }
                  key={ `postIt${index}` }
                  position={ index }
                />
              )
           })
  
        }
        
        </div>
    );
  }
}