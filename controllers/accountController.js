var Account = require('../models/Account')
var Lesson = require('../models/Lesson')
var bcrypt = require('bcrypt')

const accountController = {
    //register
    registerAccount: async(req, res, next)=>{
        try {
            //hash password
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)
            //create new account
            const newAccount = await new Account({
                user_name: req.body.user_name,
                email: req.body.email,
                password: hashed
            })
            //save new account into database
            const account = await newAccount.save()
            res.redirect(`/user/${account._id}`)
            
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //login
    loginAccount: async (req, res, next) =>{
        try {
            console.log(req.body.email)
            const account = await Account.findOne({email: req.body.email})
            console.log(account)
            if(!account) res.status(500).json('error')
            const validPassword = await bcrypt.compare(req.body.password, account.password)
            if(!validPassword) res.status(500).json('error')
            if(account && validPassword) {
                res.redirect(`/user/${account._id}`)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // index
    renderHomepage: async(req, res, next)=>{
        Account.findById(req.params.id, (error, dataAccount)=>{
            Lesson.find({user_id: req.params.id}, (error, dataLesson)=>{
                res.render('index', { 
                    account: dataAccount,
                    lessons: dataLesson
                })
            })
        })
    }
}

module.exports = accountController