import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Post from '../Post/Post'
import './dashboard.css'
import { connect } from 'react-redux';



class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            search: '',
            userPosts: true
        }
    }

    handleChange(e) {
        this.setState({
            search: e.target.value
        })
    }

    checkbox() {
        if(this.state.userPosts === true) {
            this.setState({userPosts: false})
        } else {
            this.setState({userPosts:true})
        }
    }

    componentDidMount() {
        this.search()
    }

    search() {
        axios.get(`/api/posts/${this.props.id}?userPosts=${this.state.userPosts}&search=${this.state.search}`)
        .then(res => {this.setState({posts: res.data})
    })
    }

    reset(){
        axios.get(`/api/posts/${this.props.id}?userPosts=true&search`).then (res => {
            this.setState({posts: res.data, search: ''})
            this.checkbox()
        })
    }

    render() {
        const mappedPosts = this.state.posts.map((item,i) => (
            <Link to={`/post/${this.props.is}`}>
                <div key={i} className="single-post">
                    <h2 className='post-title'>{item.title}</h2>
                    <div className="author-and-pic">
                        <h5 className='author'>{item.username}</h5>
                        <img className="post-profile-pic" src={item.profile_img} alt=""/>
                    </div>
                </div>
            </Link>
        ))
        return (
            <div className='dashboard'>
                <div className="space">
                    <div className="search-box">
                        <input onChange={(e) => this.handleChange(e)} className='search-input' value={this.state.search} type="text"/>
                        <i onClick={() => this.search()} className="fas fa-search"></i>
                        <button onClick={() => this.reset()}>Reset</button>
                        My Posts<input onChange={e => this.checkbox()} checked={this.state.userPosts} type='checkbox' />
                    </div>
                    <div className="posts-box">
                        <div className="single-post-2">
                            {mappedPosts}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
    function mapStateToProps(reduxState) {
        const {id} = reduxState
        return {id}
    }

    export default connect(mapStateToProps)(Dashboard)
