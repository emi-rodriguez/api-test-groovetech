const express = require('express')
const app = express()
app.use(express.json())

const validate = (req, res, next) =>{
    if(req.body.data.name === null){
        return res.status(400).send({
            status:{
                code: 400,
                description: "Invalid username"
            }
        })
    }
    next()
}

const concatName = (name, surname) =>{ return `${name}${surname}`}
const callMe = (name, surname, callback) =>{
    if(name !== null){
        return callback(name, surname)
    }    
    return null
}

app.get('/commerce/user/',
    (req,res) =>{
        res.status(200).send({
            meta:{
                countResult: 150,
                styles:[{
                    name: 'Funk',
                    count: 28,
                },{
                    name: 'Rock',
                    count: 3
                }],
                destinyKm:[{
                    description: 'Até 5km',
                    count: 10
                }],
                priceCosts:[{
                    description: 'Até R$50,00',
                    count: 3
                },{
                    description: 'Até R$100, 00',
                    count: 37
                }]
            },
            data:[{
                name: 'Manifesto Bar',
                address:{
                    street: 'Rua Augsta',
                    number: '720',
                    zipCode: '03351-90',
                    lat: '9210830123.12',
                    lng: '10923891023.32' 
                },
                userChecks: 3.5,
                available: true
            },{
                name: 'Bubba',
                    address:{
                        street: 'Rua Augsta',
                        number: '765',
                        zipCode: '03351-90',
                        lat: '9210830123.12',
                        lng: '10923891023.32' 
                    },
                    userChecks: 3.5,
                    available: true
            }]        
        })
})

app.post('/commerce/user/', [validate],
    (req,res) =>{
        res.status(200).send({
            status:{
                code: 200,
                description: callMe(req.body.data.name, req.body.data.surname, concatName)
            }
        })
})

//app.listen(3800)