import React from 'react'
import {withRouter, Link} from 'react-router-dom'


function Nav(props) {
    if (props.location.pathname !== '/'){
        return (
            <div>
                <div className="nav-links">
                    <Link to='/Dashboard'>
                        <button>Home</button>
                    </Link>
                    <Link to='/Post'>
                    <button>New Post</button>
                    </Link>
                </div>
                <div className="logout-button">
                    <Link to='/'>
                        <button>Logout</button>
                    </Link>
                </div>
            </div>
        )
    } else {
        return null
    }  

}
    

export default withRouter(Nav)