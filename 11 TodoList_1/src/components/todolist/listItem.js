import React from 'react'

const List = function(props) {
  return (
    <ul>
    {
      props.items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={props.handleRemove.bind(null, index)}> 
            </button>
          </li>
        )
      )
    }
    </ul>
  )
}

export default List;
