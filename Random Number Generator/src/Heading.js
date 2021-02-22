import React from 'react';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Welcome",
      name: "Nikki",
      adjective: "Random", 
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.greeting} to {this.state.name}'s {this.state.adjective} Number Generator!</h1>
      </div>
    );
  }
}
  export default Heading;