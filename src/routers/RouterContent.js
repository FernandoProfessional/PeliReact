import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { BusquedaScreen } from '../views/BusquedaScreen'
import { HomeScreen } from '../views/HomeScreen'
import { ListaScreen } from '../views/ListaScreen'
import { MovieScreen } from '../views/MovieScreen'

export const RouterContent = () => {
    return (
        <div>
            {/*Navbar  */}  
            <Navbar/>
            <Switch>
                <Route exact path="/home" component={HomeScreen}/>
                <Route exact path="/lista" component={ListaScreen}/>
                <Route exact path="/movie" component={MovieScreen}/>
                <Route exact path="/buscar" component={BusquedaScreen}/>
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
    )
}
