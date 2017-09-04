import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import Card from '../card'

const Powerpuff = ({ style, className, name, onClick }) => {
  const classes = classnames(
    className,
  )

  return (
    <Card style={style} className={classes} onClick={onClick}>
      {name}
    </Card>
  )
}

Powerpuff.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
}

Powerpuff.defaultProps = {
  style: {},
  className: '',
  name: undefined,
  onClick: undefined,
}

export default onlyUpdateForPropTypes(Powerpuff)
