const mongoose = require('mongoose');



const candidatSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true
    },
	lastName: {
        type: String,
        required: true
    }, 
	photo: {
        type: String,
        required: true
	},
	action: {
		type: Boolean,
		required: true
	}
})
 const CandidatList = mongoose.model('CandidatList', candidatSchema);
 module.exports = CandidatList;
 

