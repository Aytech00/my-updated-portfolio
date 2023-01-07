import React from 'react'

const Modal = (props) => {
  return (
    <div>
        <header>

            {props.title}

        </header>

        <div>
            <p>
                {props.message}
            </p>

        </div>

        <footer>
            

        </footer>
    </div>
  )
}

export default Modal