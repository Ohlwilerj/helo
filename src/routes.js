import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Post from './components/Post/Post'
import Form from './components/Form/Form'
import {Switch, Route} from 'react-router-dom'
import React from 'react'


export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/Post' component={Post} />
        <Route path='/Form' component={Form} />
    </Switch>
)