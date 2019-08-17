const express = require('express')
const app = express()
//const port = 3000
app.use(express.json())

class Pokemon{
    constructor(name, type){
        this.name = name
        this.type = type
        this.id = null
        this.type2 = null
    }
}

app.get('/', (req,res) => res.send({message: 'Hello world'}))

//pokemons -> list all Pokemons http//localhost:3000/Pokemons

let pokemons = []

    pokemons.push(createPokemon("Pikachu","Electric"))
    pokemons.push(createPokemon("Eevee","Normal"))


function generatenewId(num){
    let newId = num + 1
    return newId
}
function createPokemon(name,type){
    let p = new Pokemon(name,type)
    p.id = generatenewId(pokemons.length)
    return p

}
app.get('/Pokemons', (req,res) => res.send(pokemons))

app.get('/Pokemons/:id', (req,res) => {
    let id = req.params.id
    let p = pokemons[id-1]
    res.send(p)
})

app.put('/Pokemons/:id', (req,res) => {
    let id = req.params.id
    let p = pokemons[id-1]
    p.type2 = req.body.type2
    pokemons.push(p)
    res.sendStatus(201)

})
app.post('/Pokemons', (req,res) => {
    if(req.body.name == null || req.body.name == '' || req.body.name == undefined || req.body.type == null || req.body.type == ''|| req.body.type == undefined){
        res.status(400).send('Insufficient parameters: name and type are required')
        return
    }

    let p = new Pokemon(req.body.name, req.body.type)
    p.id = generatenewId(pokemons.length)

    pokemons.push(p)
    res.sendStatus(201)
})

module.exports = app

