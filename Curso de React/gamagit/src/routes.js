import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Repositores from './pages/Repositores'
import Home from './pages/Home'
export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Repositores' component={Repositores} />
            </Switch>
        </BrowserRouter>
    )
}
