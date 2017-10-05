import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './card.css'

const Card = ({ style, className, children, onClick }) => {
  const classes = classnames(
    className,
    'card',
  )

  return (
    <div style={style} className={classes} onClick={onClick}>
      {children}
    </div>
  )
}

Card.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

Card.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  onClick: undefined,
}

export default Card
