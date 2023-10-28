const mongodb=require('mongodb')

const MongoClient=mongodb.MongoClient;


let database;
async function connect()
{
  const client=await MongoClient.connect('mongodb+srv://Sunil:SUNIL99@cluster0.70tjind.mongodb.net/?retryWrites=true&w=majority');
  database=client.db('')
}

function getDb() {
    if (!database) {
      throw { message: 'Database connection not established!' };
    }
    return database;
  }
  
  module.exports = {
    connectToDatabase: connect,
    getDb: getDb
  };
  

//mongodb://127.0.0.1:27017