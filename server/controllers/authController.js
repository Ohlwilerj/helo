const bcrypt = require('bcryptjs')

module.exports = {
    login: async(req,res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const user = await db.find_user([username])
        if(!user[0]) return res.status(200).send({message: 'Choose a different username bro'})
        const result = bcrypt.comparSync(password, user[0].password)
        if (!result) return res.status(200).send({message: 'Password is wrong homie'})
        req.session.userid = user[0].id
        res.status(200).send(newUser[0])

    },

    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const user = await db.find_user([username])
        if (user[0]) return res.status(200).send({message: 'Choose a different username bro'})
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        let profileImg = `https://robohash.org/${username}.png`
        const newUser = await db.create_user([username, hash, profileImg])
            req.session.userid = newUser[0].id
            res.status(200).send(newUser[0])
        
    },
    logout: async (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    getPost: async (req, res) => {
        const db = req.app.get('db)')
        const {userid} = req.session 
        const {userPosts, search} = req.query
        const result = await db.get_post()
        if (userPosts === 'true' && search !== '') {
            const filteredResult = result.filter(el => el.title.includes(search))
            res.status(200).send(filteredResult)
        } else if (userPosts === 'false' && search !== '') {
            const filteredResult = result.filter(el => el.user_id !== +userid)
            res.status(200).send(filteredResult)
        } else if (userPosts === 'false' && search !== '') {
            const filteredResult = result.filter(el => user_id !== userid)
            const filteredSearch = filteredResult.filter(el => el.title.includes(search))
            res.status(200).send(filteredSearch)
        } else if (userPosts === 'true' && search === '') {
            res.status(200).send(result)
        } else {
            console.log(`Didn't work`)
        }
    },
    getOnePost: async (req, res) => {
        const db = req.app.get('db')
        const {postId} = req.params 
        const result = await db.get_one_post(postId)
        res.status(200).send(result)
    },

    addPost: async (req, res) => {
        const db = req.app.get('db') 
        const {userId} = req.session
        const {title, image_url, content} = req.body
        await db.add_post([title, image_url, content, userId])
        res.sendStatus(200)
    },

    findUser: async (req, res) => {
        const db = req.app.get('db')
        const {userId} = req.session
        let result = await db.find_user_by_id(userId)
        res.status(200).send(result)
    }
    
}
