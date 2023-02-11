const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});

const Task = mongoose.model('Task',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
});

const test = new Task({
    description:'When no collection argument is passed, Mongoose produces a collection name by passing the model name to the utils.toCollectionName method. This method pluralizes the name. If you don\'t like this behavior, either pass a collection name or set your schemas collection name option.',
    completed : true
})

test.save().then(()=>{
    console.log(test)
}).catch((error)=>{
    console.log(error.message)
})