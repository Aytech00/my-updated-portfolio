import React from 'react'

const Button = () => {
  return (
    <button type={props.type}>
        {props.children}
    </button>
  )
}

export default Button