import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import Card from '../card'

const Add = ({ style, className, onClick }) => {
  const classes = classnames(
    className,
  )

  return (
    <Card style={style} className={classes} onClick={onClick}>
      +
    </Card>
  )
}

Add.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

Add.defaultProps = {
  style: {},
  className: '',
  onClick: undefined,
}

export default onlyUpdateForPropTypes(Add)
