import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../Nav/nav.css'
// import homeLogo from '../../assets/home_icon.png'


function Nav(props) {
    if (props.location.pathname !== '/'){
        return (
            <div className="column-parent"> 
                <div className="nav-links">
                    <nav className='top-buttons'>
                        <img className='profile-pic' src={props.profileImg} alt=""/>
                        <h4 className='username'>{props.username}</h4>
                        <Link className="link" to='/Dashboard'>
                            <i className="fal fa-home"></i>
                        </Link>
                        <Link className="link" to='/Post'>
                            <i className="document far fa-file-alt"></i>
                        </Link>
                    </nav>
                </div>
                <div className="logout-button">
                    <Link className="link" to='/'>
                        <i className="power fas fa-power-off"></i>
                    </Link>
                </div>
            </div>
        )
    } else {
        return null
    }  

}
function mapStateToProps(reduxState){
    const{username, profileImg} = reduxState
    return {username, profileImg}
}

export default withRouter(connect(mapStateToProps)(Nav))