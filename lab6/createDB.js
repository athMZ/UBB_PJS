const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'lab6';

async function main() {

    await client.connect();
    console.log('Connected successfully to server!');

    const db = client.db(dbName);
    const collection = db.collection('persons');

    const rows = (await collection.find({}).toArray()).length;

    if (rows < 3) {
        const insertResult = await collection.insertMany([
            { firstName: "Jan", lastName: "Kowalski" },
            { firstName: "Adam", lastName: "Nowak" },
            { firstName: "Anna", lastName: "Kot" },
        ]);
        console.log('Inserted =>', insertResult);
    } else {
        console.log("Skipping adding...")
    }

    const getAll = await collection.find({}).toArray();
    console.log('Found =>', getAll);

    const getStartingWithA = await collection.find({ firstName: /^A/ }).toArray();
    console.log('Found starting with A =>', getStartingWithA);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());