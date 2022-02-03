const { expect } = require("chai")
const app = require('supertest')(require('./app'));
const { syncAndSeed } = require('./db');
// const axios = require('axios')

describe('Routes', () => {
  beforeEach(() => syncAndSeed())
  describe('foo', () => {
    it('foo equal to foo', async() => {
      const foo = 'foo'
      expect(foo).to.include('foo')
    })
  })
  describe('GET routes work', () => {
    it('GET /api/movies', async() => {
      const movies = await app.get('/api/movies')
      expect(movies.body.length).to.equal(4)
    })
  })
})