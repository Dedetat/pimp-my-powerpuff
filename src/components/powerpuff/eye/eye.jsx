import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Eye = ({ style, className, color }) => {
  const classes = classnames(
    className,
  )

  // converted with http://svg-jsx.patmoody.com/
  /* eslint-disable */
  return (
    <svg style={style} className={classes} height="929.21252" id="svg3390" width="780.26184" version="1.1" viewBox="0 0 780.26184 929.21252">
      <defs id="defs3394"/>
      <g id="layer5" style={{"display":"inline"}} transform="translate(-676.68183,-109.77075)">
        <path id="path4217" style={{"display":"inline","fill":"#ffffff","fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 1007.5094,550.18773 c 0,0 20.0895,27.492 19.8936,73.79388 0.4533,44.18059 -18.6255,82.81455 -49.57675,108.6726 -42.84857,35.79767 -102.60723,19.9115 -102.60723,19.9115 -43.80476,-36.796 -48.18523,-106.88361 -45.55694,-120.90113 3.50438,-91.11389 62.20275,-126.1577 62.20275,-126.1577 77.97247,-22.77847 115.64457,44.68085 115.64457,44.68085 z"/>
        <path id="path4232" style={{"display":"inline","fill": color,"fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 851.66108,625.01451 c -1.23899,101.59682 93.54341,115.22566 115.22566,113.36718 39.02796,-26.0187 60.09076,-71.86117 58.85176,-115.84516 -2.9479,-96.10229 -74.95858,-115.84516 -74.95858,-115.84516 -34.6916,9.29239 -100.97732,37.16958 -99.11884,118.32314 z"/>
        <path id="path4255" style={{"display":"inline","fill":"#000000","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 876.43556,620.38396 c -1.06482,86.52941 78.70893,99.07674 93.87754,97.79313 43.1249,-4.74855 59.3682,-47.00001 57.3256,-99.90361 -7.054,-80.61076 -53.27018,-99.19225 -53.27018,-99.19225 -29.81471,7.91427 -99.53018,32.18472 -97.93296,101.30273 z"/>
        <path id="path4266" style={{"display":"inline","opacity":"1","fill":"#ffffff","fillOpacity":"1","stroke":"none","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 1015.2071,623.15601 a 32.523373,32.833118 0 0 1 -32.52332,32.83311 32.523373,32.833118 0 0 1 -32.52338,-32.83311 32.523373,32.833118 0 0 1 32.52338,-32.83312 32.523373,32.833118 0 0 1 32.52332,32.83312 z"/>
        <path id="path4338" style={{"display":"inline","fill":"#ffffff","fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 1126.4835,552.6657 c 0,0 -20.0895,27.492 -19.8936,73.79388 -0.4533,44.18059 18.6255,82.81455 49.5768,108.6726 42.8485,35.79767 102.6072,19.9115 102.6072,19.9115 43.8048,-36.796 48.1852,-106.88361 45.5569,-120.90113 -3.5043,-91.11389 -62.2027,-126.1577 -62.2027,-126.1577 -77.9725,-22.77847 -115.6446,44.68085 -115.6446,44.68085 z"/>
        <path id="path4340" style={{"display":"inline","fill": color, "fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 1282.3318,627.49248 c 1.239,101.59682 -93.5434,115.22566 -115.2256,113.36718 -39.028,-26.0187 -60.0908,-71.86117 -58.8518,-115.84516 2.9479,-96.10229 74.9586,-115.84516 74.9586,-115.84516 34.6916,9.29239 100.9773,37.16958 99.1188,118.32314 z"/>
        <path id="path4342" style={{"display":"inline","fill":"#000000","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 1257.5574,622.86193 c 1.0648,86.52941 -78.709,99.07674 -93.8776,97.79313 -43.1249,-4.74855 -59.3682,-47.00001 -57.3256,-99.90361 7.054,-80.61076 53.2702,-99.19225 53.2702,-99.19225 29.8147,7.91427 99.5302,32.18472 97.933,101.30273 z"/>
        <path id="path4344" style={{"display":"inline","opacity":"1","fill":"#ffffff","fillOpacity":"1","stroke":"none","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 1118.7858,625.63398 a 32.523373,32.833118 0 0 0 32.5233,32.83311 32.523373,32.833118 0 0 0 32.5234,-32.83311 32.523373,32.833118 0 0 0 -32.5234,-32.83312 32.523373,32.833118 0 0 0 -32.5233,32.83312 z"/>
      </g>
    </svg>
  )
  /* eslint-enable */
}

Eye.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.string,
}

Eye.defaultProps = {
  style: {},
  className: '',
  color: '#ff00ff',
}

export default Eye
