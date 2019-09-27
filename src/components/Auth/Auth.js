import React, { Component } from 'react'

import axios from 'axios'
import Swal from 'sweetalert2';

export default class Auth extends Component {
    constructor() {
        super()
        this.state ={
            username: '',
            password: '',

        }
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    login = async () => {
        const {password, username} = this.state
        const res = await axios.post('/auth/login', {username, password})
        Swal.fire(res.data.message)
    }

    render() {
        return (
            <div className='container'>
                <div className="login">
                    <img src="" alt=""/>
                    <h1>Helo</h1>
                </div>
                <div className="input-boxes">
                    <input type="text" onChange={e => this.handleChange(e, 'username')} placeholder="Username"></input> 
                    <input type="text" onChange={e => this.handleChange(e, 'password')} placeholder="Password"></input>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }
}
