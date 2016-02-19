import React from 'react';

export default class Button extends React.Component {
  constructor (){
    super();

    this.state = {
      times : 1
    }
  }
  click (){
    this.setState({times : this.state.times + 1});
  }
  render (){
    return (
      <div className="button" onClick={this.click.bind(this)}>{this.state.times} times</div>
    );
  }
}
