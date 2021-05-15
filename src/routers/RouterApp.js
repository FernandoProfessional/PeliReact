import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { AuthContext } from '../components/auth/AuthContext';
import { IndexScreen } from '../views/IndexScreen'
import { PrivateRoute } from './PrivateRoute';
import { RouterContent } from './RouterContent'

export const RouterApp = () => {
    const {user} = useContext(AuthContext)
    return (
        
        <Router>
            <div className="algo">
            <Switch>
                {/* Ruta de Inicio con el registro y login */}
                <Route exact path="/index" component={IndexScreen}/>
                {/* Rutas del contenido */}
                <PrivateRoute path="/" component={RouterContent} isAuteticated={user.logged}/>
              {/*   <Route path="/" component={RouterContent}/> */}
            </Switch>
            </div>

        </Router>
        
    )
}
