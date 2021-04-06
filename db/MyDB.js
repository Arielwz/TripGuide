const { MongoClient, ObjectId } = require("mongodb");

function MyDB() {
  const myDB = {};

  const url = process.env.MONGO_URL;
  const DB_NAME = "tripsApp";

  myDB.getTrips = async (query = {}, maxRecords = 50) => {
    let client;
    try {
      client = new MongoClient(url, { useUnifiedTopology: true });
      await client.connect();
      return await client
        .db(DB_NAME)
        .collection("trips")
        .find(query)
        .limit(maxRecords)
        .toArray();
    } finally {
      client.close();
    }
  };

  return myDB;
}

module.exports = MyDB();
