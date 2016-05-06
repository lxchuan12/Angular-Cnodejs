var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var UserSchema=new mongoose.Schema({
    user_id:{type: ObjectId, ref: 'User'},
    user_name:{type:String},
    user_pwd:{type:String},
    meta:{
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});
UserSchema.index({user_id: 1}, {unique: true});
mongoose.model('User',UserSchema);