const express = require('express')
const mongoose = require('mongoose');
const app = express();
const PORT = 8888;
const { createYoga, createSchema } = require('graphql-yoga');
const { schema, resolvers } = require('./graphql/graphQL.js');



const cors = require('cors')
const bodyParser = require('body-parser');



app.use(express.json());
async function runServer() {
	await mongoose.connect("mongodb://localhost:27017/Candidat")
}
runServer()

app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.json({ limit: "50mb", extended: false }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));


const yoga = createYoga({
	schema: createSchema({
	  typeDefs: schema,
	  resolvers
	})
  })
  
  app.use('/graphql', yoga)
  
  app.listen(PORT, () => {
	console.log(`server running on port ${PORT}}...`)
  });
