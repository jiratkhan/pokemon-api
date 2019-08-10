const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req,res) => res.send(`Hello World!`))

//pokemon -> list all pokemons http//localhost:3000/pokemons

let pokemon = [
    {name: 'Pikachu', type: 'Electric'},
    {name: 'Eevee', type: 'Normal'}
]
app.get('/pokemons', (req,res) => res.send(pokemon))

app.post('/pokemons', (req,res) => {
    pokemon.push(req.body)
    res.sendStatus(201)
})

app.listen(port, () => console.log(`Pokemon API lidten on port ${port}`))