const request = require('supertest')
const chai  = require('chai')

const app = require('../poke')
chai.should()

describe('Pokemon API', () => {
    describe('GET /', () => {
        it('should return 200 ok with "Hello World"', (done) =>{
            request(app).get('/')
            .expect(200)
            .end((err,res) =>{
                res.body.should.deep.equal({message: 'Hello world'})
                done()
            })
        })
    })
    describe('GET /pokemon/:id', () => {
        it('should return id name and type pokemon', (done) =>{
            request(app).get('/pokemon/id')
            .expect(200)
            .end((err,res) =>{
                res.body.should.deep.equal()
                done()
            })
        })
    })
})