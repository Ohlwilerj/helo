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
        res.session.destroy()
        res.sendStatus(200)
    },
    
}
