// const mongodb = require('mongodb');
// const mongodbClient = mongodb.MongoClient;
const {MongoClient, ObjectID} = require('mongodb')
const chalk = require('chalk');

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log(chalk.red.bold('Unable to connect to database'));
    }
    const db = client.db(databaseName);

    //*********** insert one *************//

    db.collection('users').insertOne({
        name: 'Vikram',
        age: 26
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }

        console.log(result.ops)
    })

    // *************** insert many *************//

    db.collection('users').insertMany([
        {
            Name: "Bansi",
            Age: 20
        },
        {
            Name: "Apexa",
            Age: 22
        },
        {
            Name: "Priya",
            Age: 12
        }

    ], (error, result) => {

        if (error) {
            console.log(chalk.red('data not insert'));
        }
        console.log(result.ops);

    });

    //*************  find query ****************//

    //************ find only one object **********//
    db.collection('users').findOne({Name: "Bansi"}, (error, result) => {
        console.log(result)
    })
    //
    // ************ find object array *************//
    db.collection('users').find({Name: "Bansi"}).toArray((error, result) => {
        console.log(result);
    })
    //
    // ************ find object array count *************//
    db.collection('users').find({Name: "Bansi"}).count((error, result) => {
        console.log(result);
    })
    //
    // ************ find by id ***************//
    db.collection('users').findOne({_id: new ObjectID('63e485f0fbe29618a81fc954')}, (error, result) => {
        console.log(result);
    });

    //********* update one document ***********//
    db.collection('users').updateOne({
        _id: new ObjectID('63e485f0fbe29618a81fc954')
    }, {
        // increment value numeric field value //
        // $inc: {
        //     Age: 12
        // }
        // change field value //
        $set: {
            Age: 22
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    //********* update many document ***********//
    db.collection('users').updateMany({
        Age: 26
    }, {
        $set: {
            Age: 20
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })

    // ********* delete many document *********//
    db.collection('users').deleteMany({
        Age: 20
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })


    //  delete one document //
    db.collection('users').deleteOne({
        Age: 12
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })


})