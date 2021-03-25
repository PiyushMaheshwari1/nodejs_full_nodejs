const express = require('express');
const router = express.Router();
const uuid = require('uuid');

let movies = require('../Movies');

//get all movies
router.get('/', (req,res)=>{
    res.json(movies);
});

//get movie with id 
router.get('/:id',(req,res)=>{
    const found = movies.some(movie=> movie.id === parseInt(req.params.id))

        if(found){
            res.json(movies.some(movie=> movie.id === parseInt(req.params.id)))
        }
        else{
            res.sendStatus(400)
        }
})

//create a new user 
router.post('/',(req,res)=>{
    const newmovie={
        id:uuid.v4(),
        title: req.body.title,
        director: req.body.director,
        relese_date: req.body.relese_date
    }

        if(!newmovie.title|| !newmovie.director){
            return res.sendStatus(400)
        }

        users.push(newUser)
        res.json(users)

})

// update record
router.put('/:id', (req,res)=>{
    const found = users.some(user => user.id === parseInt(req.params.id))

    if(found){
        const updateUser = req.body
       users.forEach(user=>{
           if(user.id === parseInt(req.params.id) ){
               user.name = updateUser.name ? updateUser.name: user.name
               user.email = updateUser.email ? updateUser.email: user.email
               res.json({msg: "User updated",user})
           }
       })
    }
})

//delete record
router.delete('/:id',(req,res)=>{
    const found = users.some(user => user.id === parseInt(req.params.id))
    
    if(found){
        users = users.filter(user => user.id !== parseInt(req.params.id))
        res.json({
            msg: 'user deleted', users
        })

    }
    else{
        res.sendStatus(400)
    }

})


module.exports= router