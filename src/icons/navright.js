import React, {Component, PropTypes} from 'react';

class Navdown extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
    };

    const viewBox = "0 0 28 28";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <path d="M14,2A12,12,0,1,1,2,14,12,12,0,0,1,14,2m0-2A14,14,0,1,0,28,14,14,14,0,0,0,14,0Z"/>
          <polyline style={style} points="11.17 8.34 16.83 14 11.17 19.66"/>
        </g>
      </svg>
    );
  }
}

Navdown.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Navdown.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Navdown;
