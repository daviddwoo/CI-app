const express = require('express');
const app = express();
const { models: { Actor, Movie, Role }, syncAndSeed} = require('./db')

app.get('/api/movies', async(req, res, next) => {
  try {
    res.send(await Movie.findAll())
  }
  catch(ex) {
    next(ex)
  }
})

app.get('/api/actors', async(req, res, next) => {
  try {
    res.send(await Actor.findAll())
  }
  catch(ex) {
    next(ex)
  }
})

module.exports = app