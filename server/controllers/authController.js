const bcrypt = require('bcryptjs')

module.exports = {
    async login(req,res) {
        const db = req.app.get('db')
        const {username, password} = req.body
        const user = await db.find_user(username)
        if(!user[0]) return res.status(200).send({message: 'Choose a different username bro'})
        const result = bcrypt.comparSync(password, user[0].hash)
        if (!result) return res.status(200).send({message: 'Password is wrong homie'})
        req.session.user = {username, password, profileImg}
        res.status(200).send({message: `Congrates bro, you're logged in!`, user: req.session.user, loggedIn: true})

    },
    
}