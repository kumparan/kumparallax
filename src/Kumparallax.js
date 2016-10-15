import React, { Component, PropTypes } from 'react';

class Kumparallax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parallaxHeight: 0
    }
  }

  componentDidMount() {
    this.setState({ parallaxHeight: document.getElementById('parallax').clientHeight });
    if (getComputedStyle(document.getElementById('overflow')).webkitOverflowScrolling) {
      document.body.classList.add('sticky-parallax');
    } else {
      document.body.classList.add('overflow-parallax');
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('sticky-parallax');
    document.body.classList.remove('overflow-parallax');
  }

  render() {
    return (
      <div>
        <div className="magic-fixed-pixel"></div>
        <div id="overflow" ref={ref => this.overflow = ref}>
          <div id="container">
            <div id="parallax" style={{ backgroundImage: `url(${this.props.parallaxImage})` }}>
              {this.props.parallaxHeader ? this.props.parallaxHeader : <div style={{ height: 400 }} />}
            </div>
            <div id="content" style={{
              marginBottom: (0 - 5 - this.state.parallaxHeight),
              paddingBottom: this.state.parallaxHeight
            }}>
              <div className="magic-pixel" />
              {this.props.parallaxContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Kumparallax.propTypes = {
  parallaxImage: PropTypes.string,
  parallaxHeader: PropTypes.object,
  parallaxContent: PropTypes.object
}

Kumparallax.defaultProps = {
  bgImage: 'http://lorempixel.com/980/400/'
}

export default Kumparallax;

