import React, { createContext, useContext } from 'react'

export const userAuthentication = createContext()

const UserAuth = (props) => {
  return (
    <userAuthentication.Provider value={{username:"furqan"}}>
      {props.children}
    </userAuthentication.Provider>
  )
}

export default UserAuth