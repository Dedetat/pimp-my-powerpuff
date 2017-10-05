import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Dress = ({ style, className, color }) => {
  const classes = classnames(
    className,
  )

  // converted with http://svg-jsx.patmoody.com/
  /* eslint-disable */
  return (
    <svg style={style} className={classes} height="929.21252" id="svg3390" width="780.26184" version="1.1" viewBox="0 0 780.26184 929.21252">
      <defs id="defs3394"/>
      <g id="layer8" style={{"display":"inline"}} transform="translate(-676.68183,-109.77075)">
        <path id="path4408" style={{"fill": color,"fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 1015.5921,835.48121 c 22.3715,4.58211 83.9422,4.98423 98.632,2.01933 l 7.0579,66.28573 -120.1816,34.69159 z"/>
        <path id="path4399" style={{"display":"inline","fill":"#ffffff","fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 1065.5276,926.08801 c 0,0 -4.9559,-34.07211 28.4967,-34.6916 34.072,0 30.3551,34.07211 30.3551,34.07211 z"/>
        <path id="path4404" style={{"display":"inline","fill":"#ffffff","fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 1004.1978,911.22018 59.4713,0 2.478,66.90522 -67.52471,-1.23899 c 0,0 1.85851,-54.51536 5.57541,-65.66623 z"/>
        <path id="path4442" style={{"display":"inline","fill":"#000000","fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 1012.8355,852.79821 102.7921,0.10689 3.8327,36.09626 -112.9311,2.38211 z"/>
      </g>
    </svg>
  )
  /* eslint-enable */
}

Dress.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.string,
}

Dress.defaultProps = {
  style: {},
  className: '',
  color: '#ff00ff',
}

export default Dress
