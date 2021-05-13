import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { IndexScreen } from '../views/IndexScreen'
import { RouterContent } from './RouterContent'

export const RouterApp = () => {
    return (
        
        <Router>
            <div className="algo">
            <Switch>
                {/* Ruta de Inicio con el registro y login */}
                <Route exact path="/index" component={IndexScreen}/>
                {/* Rutas del contenido */}
                <Route path="/" component={RouterContent}/>
            </Switch>
            </div>

        </Router>
        
    )
}
