const mongoose = requiare('mongoose');

const JobSchema = new mongoose.Schema({
    company: {
        type:String,
        require:[true, 'Please provie company name'],
        maxLength: 50
    },
    position: {
        type:String,
        require:[true, 'Please provide a position'],
        maxlength:100
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending',
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:[true, 'Please provide user']
    }
}, {timestamps:true})

module.exports = mongoose.model('Job', JobSchema)