import React, { Component } from "react";

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({term}); 
    this.props.onSearchChange(term);
  };

  render() {
    return <input type="text" 
                  placeholder="search" 
                  onChange={this.onSearchChange}
                  value={this.state.term} />; // make element controlled
  }
}