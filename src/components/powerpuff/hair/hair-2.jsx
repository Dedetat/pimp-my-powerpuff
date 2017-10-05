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
    <svg style={style} className={classes}  height="929.21252" id="svg3390" width="780.26184" version="1.1" viewBox="0 0 780.26184 929.21252">
    <defs id="defs3394"/>
    <g id="layer3" style={{"display":"inline"}}>
      <path id="path4176" style={{"fill": color,"fillRule":"evenodd","stroke":"#000000","strokeWidth":"4.09319258","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 162.78681,468.22115 62.9409,-15.24128 40.96154,-50.80424 -6.99344,40.64339 94.91089,-4.06434 28.97279,-59.94901 21.97937,53.85249 91.9137,9.14479 -10.98969,-36.57906 51.95123,41.65947 79.92494,25.40213 c 0,0 -43.95873,-144.28406 -235.77861,-148.34839 -178.83209,6.0965 -219.79362,144.28405 -219.79362,144.28405 z"/>
      <path id="path4178" style={{"display":"inline","fill": color, "fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 950.8199,813.78515 c 7.09226,23.98853 -7.33692,80.22868 -17.97531,87.32094 -5.2149,2.50315 -23.79761,-7.84333 -23.79761,-7.84333 10.83058,63.99887 89.66335,81.72164 89.66335,81.72164 0,0 10.24087,-106.37135 17.12447,-138.49512 -20.99052,-4.40802 -46.63751,-13.72534 -65.0149,-22.70413 z" transform="translate(-676.68183,-109.77075)"/>
      <path id="path4180" style={{"display":"inline","fill": color,"fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 501.2565,705.44684 c -7.0922,23.98853 6.9171,81.48811 17.5555,88.58037 5.2149,2.50315 24.00751,-7.63342 24.00751,-7.63342 -10.8305,63.99887 -100.78833,82.14145 -124.92746,84.0306 21.83017,-2.72877 29.30637,-13.57243 30.52932,-41.93195 1.44935,-33.60962 -11.39371,-73.79314 -11.13027,-100.34147 0,0 48.9465,-15.19468 63.9654,-22.70413 z"/>
      <path id="path4184" style={{"fill": color,"fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 418.34178,870.43897 c -20.15093,1.25943 -28.12735,-0.2099 -28.12735,-0.2099 l -0.41981,-17.42217 c 7.13679,15.1132 16.16273,14.69339 28.54716,17.63207 z"/>
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
  color: '#ff7f2a',
}

export default Hair1
