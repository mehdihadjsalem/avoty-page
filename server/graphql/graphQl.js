const { buildSchema } = require('graphql');
const { mutations } = require('./mutation');
const { query } = require('./Query');
const { resolvers } = require('./resolvers');

const schema = buildSchema(`
    type Candidat {
		id: ID!
		firstName: String!
		lastName: String!
		photo: String!
	    action: Boolean!
    }
	type Query {
		${query.join('\n')}
	}
	
	type Mutation {
		${mutations.join('\n')}
	}
`);

module.exports = { schema, resolvers }
