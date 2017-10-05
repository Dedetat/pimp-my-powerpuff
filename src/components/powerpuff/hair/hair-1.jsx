import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Hair1 = ({ style, className, color }) => {
  const classes = classnames(
    className,
  )

  // converted with http://svg-jsx.patmoody.com/
  /* eslint-disable */
  return (
    <svg style={style} className={classes} height="929.21252" id="svg3390" width="780.26184" version="1.1" viewBox="0 0 780.26184 929.21252">
    <defs id="defs3394"/>
    <g id="layer2" style={{"display":"inline"}}>
      <path id="path4159" style={{"display":"inline","fill": color,"fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 260.91803,358.70017 c 0,0 -1.55745,-119.92418 -90.33249,-119.92418 -65.41318,-1.55746 -87.217575,80.98775 -95.004859,87.21758 -10.584429,-0.24615 -29.59168,-24.9193 -29.59168,-24.9193 C 17.954779,450.59012 178.37282,431.90064 178.37282,431.90064 Z"/>
      <path id="path4170" style={{"display":"inline","fill": color,"fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 518.92872,358.70017 c 0,0 1.55745,-119.92418 90.33249,-119.92418 65.41319,-1.55746 87.21758,80.98775 95.00486,87.21758 10.58443,-0.24615 29.59168,-24.9193 29.59168,-24.9193 28.03423,149.51585 -132.38382,130.82637 -132.38382,130.82637 z"/>
      <path id="path4157" style={{"fill": color,"fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 172.143,445.91775 c 0,0 115.2518,32.70659 213.37158,-68.5281 102.79215,104.3496 221.15886,65.41318 221.15886,65.41318 0,0 -42.05133,-121.48162 -211.81412,-123.03908 -160.40158,3.87108 -222.71632,126.154 -222.71632,126.154 z"/>
    </g>
    </svg>
  )
  /* eslint-enable */
}

Hair1.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.string,
}

Hair1.defaultProps = {
  style: {},
  className: '',
  color: '#ffff00',
}

export default Hair1
