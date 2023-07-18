const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken')

const { MongoClient } = require('mongodb');
const URL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(URL);

function verifyToken(req, res, next) 
{
  if(!req.headers.authorization) 
  {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') 
  {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) 
  {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

async function getConnection() {
    await client.connect();
    const db = client.db('EventHub');
    const eventsCollection = db.collection('Events');
    const specialCollection = db.collection('SpecialEvents');
    return { eventsCollection, specialCollection };
  } 
getConnection();
router.get('/events', async (req, res) => {
  
    const { eventsCollection } = await getConnection();
    const data = await eventsCollection.find().toArray();
    res.json(data);
  
});

router.get('/special', verifyToken, async (req, res) => {
    const { specialCollection } = await getConnection();
    const data = await specialCollection.find().toArray();
    res.json(data);
});

router.post('/login', (req, res) => {
    let userData = req.body
    
    if ((userData.email == "TechFiesta") && (userData.password == "TechFiesta")) 
    {
      let payload = {subject: 1}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})   
    } 
    else 
    {
        res.status(401).send('Invalid Password')
    } 
})

module.exports = router;