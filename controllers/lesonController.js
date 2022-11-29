var Account = require('../models/Account')
var Lesson = require('../models/Lesson')
var Term = require('../models/Term')


const lessonController = {
    renderCreatePage: (req, res)=>{
        Account.findById(req.params.id, (error, data)=>{
            res.render('create', { account: data })
        })
    },

    createNewLesson: async(req, res)=>{
        const newLesson = await new Lesson({
            user_id: req.params.id,
            lesson_name: req.body.lesson_name,
            description: req.body.description,
            term: req.body.term,
            mean: req.body.mean,
            image: req.body.image
        })
        const lesson = await newLesson.save()

        res.redirect(`/user/${req.params.id}`)
    },

    deleteLesson: (req, res)=>{
        Lesson.findByIdAndDelete(req.params.lesson, (error, data)=>{
            res.redirect(`/user/${req.params.account}`)
        })
    },

    renderUpdatePage: (req, res)=>{
        Account.findById(req.params.account, (error, accountData)=>{
            Lesson.findById(req.params.lesson, (error, lessonData)=>{
                res.render('update', { 
                    account: accountData, 
                    lesson: lessonData
                })
            })
        })
    },

    updateLesson: (req, res)=>{
        Lesson.findByIdAndUpdate(req.params.lesson, req.body, (error, data)=>{
            res.redirect(`/user/${req.params.account}`)
        })
    }
}

module.exports = lessonController