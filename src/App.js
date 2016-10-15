import React, { Component } from "react";
import { render } from "react-dom";
import Kumparallax from './Kumparallax';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    let inc = () => {
      let oldcount = this.state.count;
      this.setState({ count: oldCount + 1 });
    }
    return (
      <Kumparallax
        parallaxImage="https://media.creativemornings.com/uploads/user/avatar/216237/Rachel-Profile-Square-06.05.14.jpg"
        parallaxHeader={<div style={{ height: 400 }}>This is the parallax header</div>}
        parallaxContent={
          <div>
            <div className="box"><h2>Content</h2></div>
            <div className="box"><h2>in</h2></div>
            <div className="box"><h2>boxes</h2></div>
            <div className="box"><h2>to</h2></div>
            <div className="box"><h2>make</h2></div>
            <div className="box"><h2>the</h2></div>
            <div className="box"><h2>page</h2></div>
            <div className="box"><h2>scroll</h2></div>
          </div>} />
    );
  }
}

render(
  <App />,
  document.getElementById('content')
);