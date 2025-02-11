import React from 'react'
import { userContext } from '../App'

const ChildC = () => {
    const user = useContext(userContext)
  return (
    <div>
     {user.name}
    </div>
  )
}

export default ChildC
