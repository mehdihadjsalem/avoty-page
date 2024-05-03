const task = require("./task");


const resolvers ={
	Query:{
		...task.Query

	},
	Mutation: {
		...task.Mutation
	}

	
}
module.exports = {resolvers}