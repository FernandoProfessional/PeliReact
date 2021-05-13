import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './components/auth/AuthContext'
import { authReducer } from './components/auth/authReducer'
import { RouterApp } from './routers/RouterApp'
/* import { ReproduccionVideo } from './components/ReproductorVideo/ReproduccionVideo'
 */
const init = () =>{
  return JSON.parse(localStorage.getItem('user'))|| {logged:false}
}

export const App = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init)
  useEffect(() => {
    localStorage.setItem('user',JSON.stringify(user))
  }, [user])

  return (
    <div>
      <AuthContext.Provider value={{user,dispatch}}>
        <RouterApp/>
      </AuthContext.Provider>
    </div>
  )
}
