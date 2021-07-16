import React from "react"
import { Switch, Route, Redirect } from "react-router"
import {LinksPage} from './pages/LinksPage'
import {CreatePage} from './pages/CreatePage'
import {DetailPage} from './pages/DetailPage'
import {AuthPage} from './pages/AuthPage'
import {RegisterPage} from './pages/RegisterPage'
import {RedirectPage} from './pages/RedirectPage'


export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return(
            <Switch>
                <Route path='/links' exact>
                    <LinksPage />
                </Route>
                <Route path='/create' exact>
                    <CreatePage />
                </Route>
                <Route path='/detail/:id'>
                    <DetailPage />
                </Route>
                <Route path="/:slug">
                    <RedirectPage />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }
    return(
        <Switch>
            <Route path='/' exact>
                <AuthPage />
            </Route>
            <Route path='/register' exact>
                <RegisterPage />
            </Route>
            <Route path="/r/:slug">
                    <RedirectPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}