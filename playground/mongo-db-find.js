//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  var db = client.db('TodoDB');
  if(err){
    return console.log('unable to connect');
  }
  console.log('connected to mongoDB server');

   db.collection('Todos').find().count().then((count) => {
     console.log(`total: ${count}`);
   }, (err) => {
     console.log('unable to fetch todo', err);
   });

   // db.collection('Todos').find({
   //   completed: false
   // }).toArray().then((docs) => {
   //   console.log('Todos');
   //   console.log(JSON.stringify(docs, undefined, 2));
   // }, (err) => {
   //   console.log('unable to fetch todo', err);
   // });


  //client.close();
});
