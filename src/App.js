import React, { Component } from "react";
import { render } from "react-dom";
import Kumparallax from './Kumparallax';

class App extends Component {
  render() {
    return (
      <Kumparallax
        parallaxImage="https://media.creativemornings.com/uploads/user/avatar/216237/Rachel-Profile-Square-06.05.14.jpg"
        parallaxHeader={
          <div style={{ padding: 10 }}>
            <span style={{ fontSize: 70, color: '#FFF' }}>This is the parallax header!</span>
            <br />
            <span style={{ fontSize: 20, color: 'aqua' }}>By default, the parallax height is 400, but you can put an element here.</span>
            <br />
            <span style={{ fontSize: 50, color: 'cyan' }}>If there is an element, the parallax height will suit the height of the element.</span>
            <br />
            <span style={{ fontSize: 50, color: 'brown' }}>Yowezlah...</span>
          </div>}
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