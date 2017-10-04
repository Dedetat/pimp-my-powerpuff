import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import Accessory from './accessory'
import Dress from './dress'
import Eye from './eye'
import Hair from './hair'
import './powerpuff.css'

const Powerpuff = ({ style, className, eye, dress, hair }) => {
  const classes = classnames(
    className,
    'powerpuff',
  )

  return (
    <div style={style} className={classes}>
      {/* base svg */}
      {/* converted with http://svg-jsx.patmoody.com/ */}
      {/* eslint-disable */}
      <svg className="part" height="929.21252" id="svg3390" width="780.26184" version="1.1" viewBox="0 0 780.26184 929.21252">
        <defs id="defs3394"/>
        <g id="layer1" style={{"display":"inline"}} transform="translate(-676.68183,-109.77075)">
          <path id="path3400" style={{"fill":"#ffdcc8","fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 1016.2703,835.79474 c 0,0 -19.09261,89.79441 -17.77847,143.23621 19.05527,28.07085 44.30937,48.92055 67.79107,7.13328 l -2.7034,-60.443 c 5.3489,62.01213 45.7797,46.0925 59.9813,-0.15786 l -9.1678,-88.01644 c 0,0 254.0675,-52.56571 169.9624,-285.60701 6.7419,-31.97751 35.8562,-111.49822 -3.0676,-138.8401 -21.7607,-15.28574 -26.4232,97.26625 -31.463,97.51332 -6.8144,-12.38985 -89.8748,-77.82215 -198.5106,-76.06996 -140.17524,8.76095 -226.0326,120.90113 -222.52822,201.50188 7.37758,106.27998 71.09363,172.04676 187.48432,199.74968 z"/>
          <path id="path4346" style={{"display":"inline","fill":"#ffdcc8","fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 900.74253,783.60466 c -10.53138,-4.33645 -73.71964,30.97465 -48.32044,62.56877 23.24344,21.34274 36.80489,-28.0436 79.91458,-40.88652 z"/>
          <path id="path4385" style={{"display":"inline","fill":"#000000","fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 998.62242,977.50591 66.90518,0.61949 c 0,0 10.5313,59.4713 -28.4967,58.8518 -45.22166,0.7092 -38.40848,-59.47129 -38.40848,-59.47129 z"/>
          <path id="path4387" style={{"display":"inline","fill":"#ffffff","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 1016.5877,992.37374 35.3111,0.61949 c 0,0 1.239,19.20427 -16.1068,19.20417 -17.3458,0 -19.2043,-19.82366 -19.2043,-19.82366 z"/>
          <path id="path4390" style={{"display":"inline","fill":"#000000","fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 1063.6691,926.08801 60.7103,0.61949 c 0,0 2.478,51.4179 -26.6382,53.27638 -41.506,0 -34.0721,-53.89587 -34.0721,-53.89587 z"/>
          <path id="path4392" style={{"display":"inline","fill":"#ffffff","fillRule":"evenodd","stroke":"none","strokeWidth":"1px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 1079.776,939.09736 29.1161,0 c 0,0 0.6195,17.9653 -13.0093,17.3458 -14.2483,0 -16.1068,-17.3458 -16.1068,-17.3458 z"/>
          <path id="path4447" style={{"display":"inline","fill":"none","fillRule":"evenodd","stroke":"#000000","strokeWidth":"4","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 1045.0535,734.18722 c 12.4596,25.69804 32.7066,11.68093 31.9279,-7.00855"/>
        </g>
      </svg>
      {/* eslint-enable */}

      {/* customizable parts */}
      <Dress className="part" {...dress} />
      <Eye className="part" {...eye} />
      <Hair className="part" {...hair} />
      <Accessory className="part" />
    </div>
  )
}

Powerpuff.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  eye: PropTypes.object,
  dress: PropTypes.object,
  hair: PropTypes.object,
}

Powerpuff.defaultProps = {
  style: {},
  className: '',
  eye: undefined,
  dress: undefined,
  hair: undefined,
}

export default onlyUpdateForPropTypes(Powerpuff)
