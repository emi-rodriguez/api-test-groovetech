const express = require('express')
const app = express()
app.use(express.json())
const axios = require('axios')

const customizedResponse = (flights) => flights.data

const normalizeResponse = (xxx) => xxx + 2

app.get('/search/air/',
    (req,res) =>{
        axios.get('https://search-trd-prod.reservafacil.tur.br/gwaereo/v0/flights?ages=30&preferences=persistLog,language:pt_BR,currency:BRL,maxResults:100&routes=GRU,RIO,2020-06-16+RIO,GRU,2020-06-19&packageGroup=PACKAGE',{
            headers:{
                'Gtw-Username':'TREND',
                'Gtw-Password': 123456,
                'Gtw-Branch-Id':1040,
                'Gtw-Transaction-Id':'23342423434',
                'Gtw-Agency-Id': 'TRE'
            }
        })
        .then(customizedResponse)
        .then(normalizeResponse)
        .then(response =>{
            return response
        })
        .catch(error=>{
            return error
        })
})

app.listen(3800)