const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

class Pokemon{
    constructor(name, type){
        this.name = name
        this.type = type
        this.id = null
    }
}

app.get('/', (req,res) => res.send(`Hello World!`))

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

app.post('/Pokemons', (req,res) => {
    let p = new Pokemon(req.body.name, req.body.type)
    p.id = generatenewId(pokemons.length)

    pokemons.push(p)
    res.sendStatus(201)
})

app.listen(port, () => console.log(`Pokemon API lidten on port ${port}`))

