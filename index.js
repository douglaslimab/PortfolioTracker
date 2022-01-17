const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
const cors = require('cors')
app.use(cors())


portfolio = ['egie3', 'taee11', 'wege3', 'itsa4', 'mdia3', 'grnd3']
url = 'https://www.fundamentus.com.br/detalhes.php?papel='


app.get('/', (req, res) => {
    res.json(price[0])
})

app.get('/code/', function(req, res){
    res.json('waiting data')
})

app.get('/code/:id', function(req, res){
    axios(url + req.params.id)
        .then((result) => {
            const html = result.data
            const $ = cheerio.load(html)
            const price = []
    
            $('tbody').each(function(){
                const output = $(this).find('.w3').text()
    
                price.push(output)
            })

            res.json(price[0])
        }).catch((err) => {
            console.log(err)        
        });
})

app.get('/price', (req, res) => {
    axios(url + portfolio[0])
        .then((result) => {
            const html = result.data
            const $ = cheerio.load(html)
            const price = []
    
            $('tbody').each(function(){
                const output = $(this).find('.w3').text()
    
                price.push(output)
            })

            res.json(price[0])
//            console.log(portfolio[0] + ' R$ ' + price[0])
        }).catch((err) => {
            console.log(err)        
        });
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}...`))