import React, { Component } from 'react'
import './post.css'
import axios from 'axios'
import {connect} from 'react-redux'
import noImage from './../../assets/no-image.png'





class Post extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPic: ''
        }
    }

    componentDidMount(){
        axios.get(`/api/post/${this.props.match.params.postId}`).then(res => {
            console.log(res)
        })
    }


    render() {
        return (
            <div className="post">
               <div className="white-box-parent">
                   <div className="white-box">
                       <div className="post-header">
                           <h1 className="post-title">Post Title</h1>
                           <h4 className="post-username">Username</h4>
                           <img className="profile-pic" src={profileImg} alt=""/>
                       </div>
                       <div className="img-content">
                           {/* <img src={noImage} alt=""/> */}
                           <div className="post-content">Message here</div>
                       </div>
                   </div>
                </div> 
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    const {id} = reduxState
    return {id}
}


export default connect(mapStateToProps)(Post)