//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  var db = client.db('TodoDB');
  if(err){
    return console.log('unable to connect');
  }
  console.log('connected to mongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // },(err, result) => {
  //   if(err){
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Chantal Kent',
  //   age: 38,
  //   location: 'Calgary'
  // },(err, result) => {
  //   if(err){
  //     return console.log('unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  client.close();
});
