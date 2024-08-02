import React from 'react'

const User = (props) => {
  return (
    <div>
<h1>Welcome {props.name} logged in as {props.type} branch: {props.branch}</h1>      
    </div>
  )
}

export default User
