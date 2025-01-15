var Account = require('../models/Account')
var Lesson = require('../models/Lesson')
var bcrypt = require('bcrypt')

const accountController = {
    //register
    registerAccount: async(req, res, next)=>{
        try {
            
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)
            
            const newAccount = await new Account({
                user_name: req.body.user_name,
                email: req.body.email,
                password: hashed
            })
            
            const account = await newAccount.save()
            res.redirect(`/user/${account._id}`)
            
        } catch (error) {
            res.status(400).json({ message: 'Đã có lỗi xảy ra, vui lòng thử lại', error: error.message });
        }
    },

    //login
    loginAccount: async (req, res, next) =>{
        try {
            console.log(req.body.email)
            const account = await Account.findOne({email: req.body.email})
            if(!account) res.status(200).json('Tài khoản không tồn tại')
            const validPassword = await bcrypt.compare(req.body.password, account.password)
            if(!validPassword) res.status(200).json('Mật khẩu sai')
            if(account && validPassword) {
                res.redirect(`/user/${account._id}`)
            }
        } catch (error) {
            res.status(400).json({ message: 'Đã có lỗi xảy ra, vui lòng thử lại', error: error.message });
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
