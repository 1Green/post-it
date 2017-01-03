import React, { Component } from 'react';
import Draggable from 'react-draggable';

export default class PostIt extends Component {
  
  constructor(){
    super();
    this.state = {
      showDelete: false,
      clicked: false,
      startPosition: []
    }
  };
  
  componentWillMount() {
    this.setState({
      startPosition: [Math.floor(Math.random() * 85) + 1, Math.floor(Math.random() * 85) + 1]
    })
  }
  
  onDrag = () => {
    this.setState({clicked: true})
  };
  
  onStop = () => {
    this.setState({clicked: false})
  };

  
  render() {
    const { tasks, onDelete, position } = this.props;
    const { startPosition, showDelete, clicked } = this.state;
    
    return (
    <Draggable
      onDrag={ () => this.onDrag() }
      onStop={ () => this.onStop() }
    >
      <div
        className="post-it"
        onMouseEnter={ () => this.setState({ showDelete: true }) }
        onMouseLeave={ () => this.setState({ showDelete: false }) }
        style={{
          top: `${startPosition[0]}%`,
          left: `${startPosition[1]}%`,
          boxShadow: clicked ? '0 6px 9px #333' : '0px 3px 5px #333'
        }}
      >
        
        { showDelete && <div className="delete-button" onClick={ (e) => onDelete(position) }> x </div> }
        
        {
          tasks.map((task, index) => {
            return <p key={index}> { task } </p>
          })
        }
      </div>
    </Draggable>
    );
  }
}