const express = require('express');
const router = express.Router();

const List = require('../model/List');

router.get('/getAll', (req, res) => {
    // console.log('Get Al Chal Users Raha Hai')
    // res.send({ name: 'Wasi' })

    List.find()
        .then((response) => {
            res.status(200).json({
                message: "Data Successfully Get",
                data: response
            })
            console.log('Response Console Success', response)
        })
        .catch(e => {
            console.log('Response Console Error', e.message)
        })
})

router.post('/add', (req, res) => {
    console.log('Add Chal Users Raha Hai');
    const text = new List(req.body)
    text.save()
        .then(() => { res.send({ message: 'User successfully inserted' }) })
        .catch(e => { res.send(500, { message: e.message }) })
})


router.post('/update', (req, res) => {
    console.log('Update Chal Users Raha Hai', req.body);
    // List.update({ _id: '5c3b7e589bae371b905d31fb' }, { text: 'Hello World' })
    List.update({ _id: req.body._id }, { text: req.body.text })
        .then((response) => {
            res.send({
                message: 'User successfully Updated',
                data: response
            })
        })
        .catch(e => { res.send(500, { message: e.message }) })
})

router.post('/remove', (req, res) => {
    console.log('Remove Chal Users Raha Hai', req.body._id);
    // For Update From Database
    // List.remove({ _id: '5c3b7d909bae371b905d31fa' })
    List.remove({ _id: req.body._id })
        .then(() => {
            console.log('Remove Chal Users Raha Hai'),
                res.send({ message: 'User successfully Removed' })
        })
        .catch(e => { res.send(500, { message: e.message }) })

})


module.exports = router