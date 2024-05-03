const { GraphQLError } = require('graphql')
const CandidatList = require('../../model/condidatSchema.js')





module.exports = {
	Query: {
		GetTasks: async () => {
			const tasks = await CandidatList.find()
			return tasks
		}
	},
	Mutation: {
		AddCandidat: async (_, { firstName, lastName, photo, action }) => {
			if (!firstName) {
				return new GraphQLError("Please enter firstName")
			}
			if (!lastName) {
				return new GraphQLError("Please enter lastName")
			}
			try {
				const newCandidat = new CandidatList({
					firstName,
					lastName,
					photo,
					action
				})
				const result = await newCandidat.save()
				return result
			} catch (error) {
				return new GraphQLError(error)
			}
		},
	}
}


