const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const resolvers = require('./resolver');
const typeDefs = require('./typeDefs');
require('dotenv/config');

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers
})

// Uncomment if you need a cors
// app.use('*', cors());
server.applyMiddleware({app});


// Connect do DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => 
    console.log('Connected do DB!')
);

// Listen on port 4000
app.listen(4000);