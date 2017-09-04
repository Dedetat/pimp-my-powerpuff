import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'

const Accessory = ({ style, className }) => {
  const classes = classnames(
    className,
  )

  return (
    <div style={style} className={classes}>
      Accessory
    </div>
  )
}

Accessory.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
}

Accessory.defaultProps = {
  style: {},
  className: '',
}

export default onlyUpdateForPropTypes(Accessory)
